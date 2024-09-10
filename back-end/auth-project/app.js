// server.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig'); // Importer la configuration Swagger
//gerer les cors 
const cors = require('cors');



const app = express();
app.use(cors());
//configurer les bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour analyser le corps de la requête
app.use(express.json());

// Route pour la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Définir vos routes ici
app.use('/api/auth', require('./routes/authRoutes'));
// importer la base de données
const connectDB = require('./config/db');
connectDB();

// Démarrage du serveur
const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Server running on port ${PORT} link http://localhost:${PORT}/api-docs`));
