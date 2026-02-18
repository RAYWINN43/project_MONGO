const cartService = require("../service/cart.service");

function getUserId(req) {
    // adapte si ton jwt met un autre champ
    return req.user?.userId || req.user?.id || req.user?._id;
}

const getMyCart = async (req, res) => {
    try {
        const userId = getUserId(req);
        const cart = await cartService.getMyCart(userId);
        res.json(cart);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const addToCart = async (req, res) => {
    try {
        const userId = getUserId(req);
        const { beerId, quantity } = req.body;
        const cart = await cartService.addToCart(userId, beerId, quantity ?? 1);
        res.json(cart);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const updateItem = async (req, res) => {
    try {
        const userId = getUserId(req);
        const { beerId, quantity } = req.body;
        const cart = await cartService.updateItem(userId, beerId, quantity);
        res.json(cart);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const removeItem = async (req, res) => {
    try {
        const userId = getUserId(req);
        const { beerId } = req.params;
        const cart = await cartService.removeItem(userId, beerId);
        res.json(cart);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const clearCart = async (req, res) => {
    try {
        const userId = getUserId(req);
        const cart = await cartService.clearCart(userId);
        res.json(cart);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const checkout = async (req, res) => {
    try {
        const userId = getUserId(req);
        const result = await cartService.checkout(userId);
        res.json(result);
    } catch (err) {
        res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

module.exports = { getMyCart, addToCart, updateItem, removeItem, clearCart, checkout };
