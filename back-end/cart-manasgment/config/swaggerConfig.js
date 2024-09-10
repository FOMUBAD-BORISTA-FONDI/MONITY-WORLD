// config/swaggerConfig.js

const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Version d'OpenAPI
        info: {
            title: 'API Documentation', // Titre de la documentation
            version: '1.0.0', // Version de l'API
            description: 'API Documentation for my Node.js application', // Description de l'API
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 4003}`, // URL de votre serveur de développement
            },
            {
                url: `http://localhost:${process.env.PORT || 4000}`, // URL de votre serveur de développement
            },
        ],
    },
    apis: ['./routes/*.js'], // Chemin vers les fichiers contenant les annotations JSDoc
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
