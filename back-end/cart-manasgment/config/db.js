const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Connecter à la base de données MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Arrête l'application en cas d'erreur de connexion
    }
};

// Exporter la fonction de connexion
module.exports = connectDB;
