// src/service/beer.service.js
const mongoose = require("mongoose");
const beerRepo = require("../repository/beer.repository");

function makeError(message, statusCode = 400) {
    const err = new Error(message);
    err.statusCode = statusCode;
    return err;
}

async function createBeer(data) {
    // validation minimaliste (adapte selon ton modèle)
    if (!data) throw makeError("Body manquant", 400);

    // Si tu utilises tes champs FR:
    if (!data.nom_article) throw makeError("nom_article requis", 400);
    if (!data.nom_marque) throw makeError("nom_marque requis", 400);

    return beerRepo.createBeer(data);
}

async function listBeers() {
    return beerRepo.listBeers();
}

async function getBeer(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400);
    }

    const beer = await beerRepo.getBeerById(id);
    if (!beer) throw makeError("Beer not found", 404);

    return beer;
}

async function updateBeer(id, data) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400);
    }

    const updated = await beerRepo.updateBeer(id, data);
    if (!updated) throw makeError("Beer not found", 404);

    return updated;
}

async function deleteBeer(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400);
    }

    const deleted = await beerRepo.deleteBeer(id);
    if (!deleted) throw makeError("Beer not found", 404);

    return deleted;
}

module.exports = { createBeer, listBeers, getBeer, updateBeer, deleteBeer };
