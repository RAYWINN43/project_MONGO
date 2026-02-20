// src/repository/beer.repository.js
const Beer = require("../model/beer");

function createBeer(data) {
    return Beer.create(data);
}

function listBeers() {
    return Beer.find().sort({ createdAt: -1 });
}

function getBeerById(id) {
    return Beer.findById(id);
}

function updateBeer(id, data) {
    return Beer.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

function deleteBeer(id) {
    return Beer.findByIdAndDelete(id);
}

module.exports = { createBeer, listBeers, getBeerById, updateBeer, deleteBeer };
