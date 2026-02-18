// src/controller/beer.controller.js

const listBeers = (req, res) => {
    res.json({ message: "listBeers OK" });
};

const getBeer = (req, res) => {
    res.json({ message: "getBeer OK", id: req.params.id });
};

const createBeer = (req, res) => {
    res.status(201).json({ message: "createBeer OK", body: req.body });
};

const updateBeer = (req, res) => {
    res.json({ message: "updateBeer OK", id: req.params.id, body: req.body });
};

const deleteBeer = (req, res) => {
    res.json({ message: "deleteBeer OK", id: req.params.id });
};

module.exports = {
    listBeers,
    getBeer,
    createBeer,
    updateBeer,
    deleteBeer
};
