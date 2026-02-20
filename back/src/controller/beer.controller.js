// src/controller/beer.controller.js
const beerService = require("../service/beer.service");

const listBeers = async (req, res) => {
    try {
        const beers = await beerService.listBeers();
        return res.json(beers);
    } catch (err) {
        return res.status(500).json({ error: err.message || "Erreur serveur" });
    }
};

const getBeer = async (req, res) => {
    try {
        const beer = await beerService.getBeer(req.params.id);
        return res.json(beer);
    } catch (err) {
        return res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const createBeer = async (req, res) => {
    try {
        const created = await beerService.createBeer(req.body);
        return res.status(201).json(created);
    } catch (err) {
        return res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const updateBeer = async (req, res) => {
    try {
        const updated = await beerService.updateBeer(req.params.id, req.body);
        return res.json(updated);
    } catch (err) {
        return res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

const deleteBeer = async (req, res) => {
    try {
        const deleted = await beerService.deleteBeer(req.params.id);
        return res.json({ message: "Deleted ✅", beer: deleted });
    } catch (err) {
        return res.status(err.statusCode || 500).json({ error: err.message || "Erreur serveur" });
    }
};

module.exports = { listBeers, getBeer, createBeer, updateBeer, deleteBeer };
