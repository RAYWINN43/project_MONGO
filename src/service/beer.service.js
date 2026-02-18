const { AppError } = require("../utils/errors");
const beerRepo = require("../repository/beer.repository");

async function createBeer(data) {
    return beerRepo.createBeer(data);
}

async function listBeers() {
    return beerRepo.listBeers();
}

async function getBeer(id) {
    const beer = await beerRepo.getBeerById(id);
    if (!beer) throw new AppError("La bière n'a pas été trouvé :(", 404);
    return beer;
}

async function updateBeer(id, data) {
    const updated = await beerRepo.updateBeer(id, data);
    if (!updated) throw new AppError("La bière n'a pas été trouvé :(", 404);
    return updated;
}

async function deleteBeer(id) {
    const deleted = await beerRepo.deleteBeer(id);
    if (!deleted) throw new AppError("La bière n'a pas été trouvé :(", 404);
    return deleted;
}

module.exports = { createBeer, listBeers, getBeer, updateBeer, deleteBeer };
