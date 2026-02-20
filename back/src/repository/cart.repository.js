const Cart = require("../model/cart");

function getCartByUserId(userId) {
    return Cart.findOne({ user: userId }).populate("items.beer");
}

function getRawCartByUserId(userId) {
    return Cart.findOne({ user: userId });
}

function createCart(userId) {
    return Cart.create({ user: userId, items: [] });
}

function saveCart(cart) {
    return cart.save();
}

module.exports = { getCartByUserId, getRawCartByUserId, createCart, saveCart };
