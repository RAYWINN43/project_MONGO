require("dotenv").config();

const fs = require("fs");
const readline = require("readline");
const mongoose = require("mongoose");

// ⚠️ adapte si ton model Beer n'est pas dans ce chemin
const Beer = require("../src/model/Beer");

async function main() {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error("❌ MONGODB_URI manquant dans .env");
        process.exit(1);
    }

    // Chemin du fichier en argument ou par défaut "beer.json" à la racine
    const filePath = process.argv[2] || "beer.json";

    if (!fs.existsSync(filePath)) {
        console.error(`❌ Fichier introuvable: ${filePath}`);
        process.exit(1);
    }

    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ MongoDB connecté");

    const rl = readline.createInterface({
        input: fs.createReadStream(filePath, { encoding: "utf8" }),
        crlfDelay: Infinity
    });

    let total = 0;
    let insertedOrUpserted = 0;
    let skipped = 0;

    for await (const line of rl) {
        total++;
        const trimmed = line.trim();

        if (!trimmed) continue;

        let obj;
        try {
            obj = JSON.parse(trimmed);
        } catch (e) {
            skipped++;
            continue;
        }

        // Validation minimale (adapte selon ton modèle)
        if (!obj.nom_article || !obj.nom_marque || obj.volume == null) {
            skipped++;
            continue;
        }

        // Stock par défaut si absent
        if (obj.stock == null) obj.stock = 50;

        // Upsert anti-doublons : (nom_article + nom_marque + volume)
        // -> Si déjà présent, on ne recrée pas une deuxième entrée.
        await Beer.updateOne(
            {
                nom_article: obj.nom_article,
                nom_marque: obj.nom_marque,
                volume: obj.volume
            },
            {
                $setOnInsert: obj
            },
            { upsert: true }
        );

        insertedOrUpserted++;
    }

    console.log("✅ Import terminé");
    console.log({ totalLines: total, insertedOrUpserted, skipped });

    await mongoose.disconnect();
    process.exit(0);
}

main().catch((err) => {
    console.error("❌ Erreur import:", err);
    process.exit(1);
});
