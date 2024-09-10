const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - gender
 *               - phone
 *               - dateOfBirth
 *               - username
 *               - lastnames
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nom d'utilisateur
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: Email de l'utilisateur
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur
 *                 example: Password123!
 *               phone:
 *                 type: string
 *                 description: Numéro de téléphone de l'utilisateur
 *                 example: 1234567890
 *               dateOfBirth:
 *                 type: string
 *                 description: Date de naissance de l'utilisateur
 *                 example: 1990-01-01
 *               lastnames:
 *                 type: string
 *                 description: Date de nom de l'utilisateur
 *                 example: emerson
 *               gender:
 *                 type: string
 *                 description: Date de nom de l'utilisateur
 *                 example: emerson
 *
 *     responses:
 *       201:
 *         description: Utilisateur enregistré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'utilisateur
 *                 username:
 *                   type: string
 *                   description: Nom d'utilisateur
 *                 email:
 *                   type: string
 *                   description: Email de l'utilisateur
 *       400:
 *         description: Requête invalide (par exemple, champ requis manquant ou email déjà utilisé)
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/register', AuthController.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authentifier un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email de l'utilisateur
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur
 *     responses:
 *       200:
 *         description: Succès de l'authentification
 *       400:
 *         description: Erreur dans la requête
 *       401:
 *         description: Authentification échouée
 */
router.post('/login', AuthController.login);
// route to refresh token
/**
 * @swagger
 * /api/auth/refresh-token:
 *   post:
 *     summary: Rafraîchir le jeton d'accès
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Jeton de rafraîchissement valide
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *     responses:
 *       200:
 *         description: Jeton d'accès rafraîchi avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Nouveau jeton d'accès
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       400:
 *         description: Requête invalide (par exemple, jeton de rafraîchissement manquant ou invalide)
 *       401:
 *         description: Jeton de rafraîchissement expiré ou non autorisé
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/refresh-token', AuthController.refreshToken);
//route /api/auth/google
/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     summary: Authentifier un utilisateur avec Google
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tokenId
 *             properties:
 *               tokenId:
 *                 type: string
 *                 description: ID du jeton Google
 *                 example: 1234567890abcdef
 *     responses:
 *       200:
 *         description: Succès de l'authentification
 *       400:
 *         description: Erreur dans la requête
 *       401:
 *         description: Authentification échouée
 */
router.post('/google', AuthController.google);
module.exports = router;
