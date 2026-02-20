require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../src/model/user");

// Données des trois utilisateurs à créer
const usersData = [
    {
        name: "Alice Dupont",
        email: "alice@example.com",
        password: "SecurePassword123!"
    },
    {
        name: "Bob Martin",
        email: "bob@example.com",
        password: "SecurePassword456!"
    },
    {
        name: "Charlie Durand",
        email: "charlie@example.com",
        password: "SecurePassword789!"
    }
];

async function createUsers() {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
        console.error("❌ MONGODB_URI manquant dans .env");
        process.exit(1);
    }

    try {
        // Connexion à MongoDB
        await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
        console.log("✅ MongoDB connecté");

        // Vider la collection User (optionnel - décommenter si souhaité)
        // await User.deleteMany({});
        // console.log("🔄 Collection User vidée");

        // Insérer les trois utilisateurs
        const createdUsers = await User.insertMany(usersData);
        console.log(`✅ ${createdUsers.length} utilisateurs créés avec succès`);
        
        createdUsers.forEach((user, index) => {
            console.log(`   ${index + 1}. ${user.name} (${user.email})`);
        });

    } catch (error) {
        console.error("❌ Erreur lors de la création des utilisateurs:", error.message);
        process.exit(1);
    } finally {
        // Fermer la connexion MongoDB
        await mongoose.connection.close();
        console.log("🔌 Connexion MongoDB fermée");
    }
}

// Exécuter la fonction
createUsers();
