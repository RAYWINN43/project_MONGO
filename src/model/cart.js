const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
    {
        beer: { type: mongoose.Schema.Types.ObjectId, ref: "beer", required: true },
        quantity: { type: Number, required: true, min: 1, default: 1 }
    },
    { _id: false }
);

const cartSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true, unique: true },
        items: { type: [cartItemSchema], default: [] }
    },
    { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
