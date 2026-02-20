const mongoose = require("mongoose");
const cartRepo = require("../repository/cart.repository");
const beerRepo = require("../repository/beer.repository");

function makeError(message, statusCode = 400) {
    const err = new Error(message);
    err.statusCode = statusCode;
    return err;
}

async function getMyCart(userId) {
    let cart = await cartRepo.getCartByUserId(userId);
    if (!cart) cart = await cartRepo.createCart(userId);
    return cart;
}

async function addToCart(userId, beerId, quantity = 1) {
    if (!mongoose.Types.ObjectId.isValid(beerId)) throw makeError("beerId invalide", 400);
    if (!Number.isInteger(quantity) || quantity < 1) throw makeError("quantity doit être >= 1", 400);

    const beer = await beerRepo.getBeerById(beerId);
    if (!beer) throw makeError("Beer not found", 404);

    let cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) cart = await cartRepo.createCart(userId);

    const existing = cart.items.find((it) => it.beer.toString() === beerId);
    const newQty = (existing?.quantity || 0) + quantity;

    if (beer.stock != null && newQty > beer.stock) throw makeError("Stock insuffisant", 400);

    if (existing) existing.quantity = newQty;
    else cart.items.push({ beer: beer._id, quantity });

    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function updateItem(userId, beerId, quantity) {
    if (!mongoose.Types.ObjectId.isValid(beerId)) throw makeError("beerId invalide", 400);
    if (!Number.isInteger(quantity) || quantity < 1) throw makeError("quantity doit être >= 1", 400);

    const beer = await beerRepo.getBeerById(beerId);
    if (!beer) throw makeError("Beer not found", 404);
    if (beer.stock != null && quantity > beer.stock) throw makeError("Stock insuffisant", 400);

    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw makeError("Cart not found", 404);

    const item = cart.items.find((it) => it.beer.toString() === beerId);
    if (!item) throw makeError("Item not in cart", 404);

    item.quantity = quantity;
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function removeItem(userId, beerId) {
    if (!mongoose.Types.ObjectId.isValid(beerId)) throw makeError("beerId invalide", 400);

    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw makeError("Cart not found", 404);

    cart.items = cart.items.filter((it) => it.beer.toString() !== beerId);
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function clearCart(userId) {
    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw makeError("Cart not found", 404);

    cart.items = [];
    await cartRepo.saveCart(cart);
    return cartRepo.getCartByUserId(userId);
}

async function checkout(userId) {
    const cart = await cartRepo.getRawCartByUserId(userId);
    if (!cart) throw makeError("Cart not found", 404);
    if (cart.items.length === 0) throw makeError("Cart is empty", 400);

    // Vérifier stock
    for (const it of cart.items) {
        const beer = await beerRepo.getBeerById(it.beer);
        if (!beer) throw makeError("Beer not found in catalog", 404);
        if (beer.stock != null && it.quantity > beer.stock) {
            throw makeError(`Stock insuffisant pour ${beer.nom_article || beer.name || "beer"}`, 400);
        }
    }

    // Décrémenter stock
    for (const it of cart.items) {
        const beer = await beerRepo.getBeerById(it.beer);
        if (beer.stock != null) {
            beer.stock -= it.quantity;
            await beer.save();
        }
    }

    cart.items = [];
    await cartRepo.saveCart(cart);

    return { message: "Checkout done ✅" };
}

module.exports = { getMyCart, addToCart, updateItem, removeItem, clearCart, checkout };
