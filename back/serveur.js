// serveur.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { loadEnv } = require("./src/config/env");
const { connectDB } = require("./src/config/database");
const routes = require("./src/routes");
const { notFound, errorHandler } = require("./src/utils/error");

loadEnv();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({ message: "OK" });
});

// ✅ Sécurité: routes doit être une fonction (router Express)
if (typeof routes !== "function") {
    console.error("❌ ERREUR: ./src/routes n'exporte pas un router Express.");
    console.error("➡️  Vérifie que src/routes/index.js contient bien: module.exports = router;");
    process.exit(1);
}

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    } catch (err) {
        console.error("❌ Impossible de démarrer le serveur:", err);
        process.exit(1);
    }
})();
