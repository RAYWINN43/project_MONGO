const router = require("express").Router();
const beerController = require("../controller/beer.controller");
const { authMiddleware, adminMiddleware } = require("../utils/jwt");

// Parti user en public
router.get("/", beerController.listBeers);
router.get("/:id", beerController.getBeer);

// parti ADMIN
router.post("/", authMiddleware, adminMiddleware, beerController.createBeer);
router.put("/:id", authMiddleware, adminMiddleware, beerController.updateBeer);
router.delete("/:id", authMiddleware, adminMiddleware, beerController.deleteBeer);

module.exports = router;
