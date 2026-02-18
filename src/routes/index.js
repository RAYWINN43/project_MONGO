const express = require("express");
const router = express.Router();

router.use("/user", require("./user.routes"));
router.use("/beer", require("./beer.routes"));
router.use("/cart", require("./cart.routes"));

module.exports = router;
