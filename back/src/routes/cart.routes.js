const router = require("express").Router();
const cartController = require("../controller/cart.controller");
const { authMiddleware } = require("../utils/jwt");

router.use(authMiddleware);

router.get("/", cartController.getMyCart);
router.post("/add", cartController.addToCart);
router.put("/item", cartController.updateItem);
router.delete("/item/:beerId", cartController.removeItem);
router.delete("/clear", cartController.clearCart);
router.post("/checkout", cartController.checkout);

module.exports = router;
