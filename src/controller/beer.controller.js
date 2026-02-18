const { asyncHandler } = require("../utils/asyncHandler");
const beerService = require("../service/beer.service");

const createBeer = asyncHandler(async (req, res) => {
    const beer = await beerService.createBeer(req.body);
    res.status(201).json(beer);
});

const listBeers = asyncHandler(async (req, res) => {
    const beers = await beerService.listBeers();
    res.json(beers);
});

const getBeer = asyncHandler(async (req, res) => {
    const beer = await beerService.getBeer(req.params.id);
    res.json(beer);
});

const updateBeer = asyncHandler(async (req, res) => {
    const beer = await beerService.updateBeer(req.params.id, req.body);
    res.json(beer);
});

const deleteBeer = asyncHandler(async (req, res) => {
    const beer = await beerService.deleteBeer(req.params.id);
    res.json({ message: "Supprimé", beer });
});

module.exports = { createBeer, listBeers, getBeer, updateBeer, deleteBeer };
