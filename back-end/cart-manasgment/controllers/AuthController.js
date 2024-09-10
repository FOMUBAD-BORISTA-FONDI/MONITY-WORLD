const AuthService = require('../services/AuthService');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class AuthController {
    static async register(req, res) {
        try {
            const user = await AuthService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.log("controller error", error);
            // console.log(error);
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const token = await AuthService.login(req.body);
            res.status(200).json( token);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static refreshToken(req, res) {
        try {
            const token = AuthService.refreshToken(req.body.refreshToken);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static async google(req, res) {
        try {
            const { tokenId } = req.body;
            console.log(req.body);
            const ticket = await client.verifyIdToken({
                idToken: tokenId,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { email, name } = payload;

            let user = await User.findOne({ email });
            if (!user) {
                user = new User({ email, name });
                await user.save();
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ token });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error });
        }
    }
}

module.exports = AuthController;
