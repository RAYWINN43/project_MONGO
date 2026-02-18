// src/controller/cart.controller.js

const getMyCart = (req, res) => {
    res.json({ message: "getMyCart OK", user: req.user || null });
};

const addToCart = (req, res) => {
    res.json({ message: "addToCart OK", body: req.body });
};

const updateItem = (req, res) => {
    res.json({ message: "updateItem OK", body: req.body });
};

const removeItem = (req, res) => {
    res.json({ message: "removeItem OK", beerId: req.params.beerId });
};

const clearCart = (req, res) => {
    res.json({ message: "clearCart OK" });
};

const checkout = (req, res) => {
    res.json({ message: "checkout OK" });
};

module.exports = {
    getMyCart,
    addToCart,
    updateItem,
    removeItem,
    clearCart,
    checkout
};
