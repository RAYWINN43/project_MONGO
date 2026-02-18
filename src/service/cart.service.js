const { AppError } = require("../utils/errors");
const cartRepo = require("../repository/cart.repository");
const beerRepo = require("../repository/beer.repository");

async function getMyCart(userId) {
    let cart = await cartRepo.getCartByUserId(userId);
    if (!cart) cart = await cartRepo.createCart(userId);
    return cart;
}

async function addToCart(userId, beerId, quantity = 1) {
    if (quantity < 1) throw new AppError("quantity must be >= 1", 400);

    const beer = await beerRepo.getBeerById(beerId);
    if (!beer) throw new AppError("Beer not found", 404);
    if (beer.stock <= 0) throw new AppError("Beer out of stock", 400);

    let cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) cart = await cartRepo.createCart(userId);

    const existing = cart.items.find((it) => it.beer.toString() === beerId);
    const newQty = (existing?.quantity || 0) + quantity;

    if (newQty > beer.stock) throw new AppError("Not enough stock", 400);

    if (existing) existing.quantity = newQty;
    else cart.items.push({ beer: beer._id, quantity });

    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function updateItem(userId, beerId, quantity) {
    if (quantity < 1) throw new AppError("quantity must be >= 1", 400);

    const beer = await beerRepo.getBeerById(beerId);
    if (!beer) throw new AppError("Beer not found", 404);
    if (quantity > beer.stock) throw new AppError("Not enough stock", 400);

    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw new AppError("Cart not found", 404);

    const item = cart.items.find((it) => it.beer.toString() === beerId);
    if (!item) throw new AppError("Item not in cart", 404);

    item.quantity = quantity;
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function removeItem(userId, beerId) {
    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw new AppError("Cart not found", 404);

    cart.items = cart.items.filter((it) => it.beer.toString() !== beerId);
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function clearCart(userId) {
    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw new AppError("Cart not found", 404);

    cart.items = [];
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function checkout(userId) {
    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw new AppError("Cart not found", 404);
    if (cart.items.length === 0) throw new AppError("Cart is empty", 400);

    // Vérif stock
    for (const it of cart.items) {
        const beer = await beerRepo.getBeerById(it.beer);
        if (!beer) throw new AppError("Beer not found in catalog", 404);
        if (it.quantity > beer.stock) throw new AppError(`Not enough stock for ${beer.name}`, 400);
    }

    // Décrément stock
    for (const it of cart.items) {
        const beer = await beerRepo.getBeerById(it.beer);
        beer.stock -= it.quantity;
        await beer.save();
    }

    cart.items = [];
    await cartRepo.saveCart(cart);

    return { message: "Le panier à été save !" };
}

module.exports = { getMyCart, addToCart, updateItem, removeItem, clearCart, checkout };
