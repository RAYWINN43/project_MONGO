const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema(
    {
            nom_article: { type: String, required: true, trim: true },
            nom_marque: { type: String, required: true, trim: true },
            type: { type: String, required: true, trim: true },
            couleur: { type: String, default: "", trim: true },
            titrage: { type: Number, required: true, min: 0, max: 100 },
            volume: { type: Number, required: true, min: 1 },
            prix_ht: { type: Number, required: true, min: 0 },
            prix_15: { type: Number, required: true, min: 0 },
            stock: { type: Number, default: 0, min: 0 },

            imageUrl: { type: String, default: "" },
            description: { type: String, default: "" }
    },
    { timestamps: true }
);

module.exports = mongoose.model("beer", beerSchema);
