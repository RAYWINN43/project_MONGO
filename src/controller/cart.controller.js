const { asyncHandler } = require("../utils/asyncHandler");
const cartService = require("../service/cart.service");

const getMyCart = asyncHandler(async (req, res) => {
    const cart = await cartService.getMyCart(req.user.userId);
    res.json(cart);
});

const addToCart = asyncHandler(async (req, res) => {
    const { beerId, quantity } = req.body;
    const cart = await cartService.addToCart(req.user.userId, beerId, quantity ?? 1);
    res.json(cart);
});

const updateItem = asyncHandler(async (req, res) => {
    const { beerId, quantity } = req.body;
    const cart = await cartService.updateItem(req.user.userId, beerId, quantity);
    res.json(cart);
});

const removeItem = asyncHandler(async (req, res) => {
    const { beerId } = req.params;
    const cart = await cartService.removeItem(req.user.userId, beerId);
    res.json(cart);
});

const clearCart = asyncHandler(async (req, res) => {
    const cart = await cartService.clearCart(req.user.userId);
    res.json(cart);
});

const checkout = asyncHandler(async (req, res) => {
    const result = await cartService.checkout(req.user.userId);
    res.json(result);
});

module.exports = { getMyCart, addToCart, updateItem, removeItem, clearCart, checkout };
