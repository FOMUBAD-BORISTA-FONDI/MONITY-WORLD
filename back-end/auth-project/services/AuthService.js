const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const  SendMailService  = require('../services/SendMailService');
const { hashPassword, comparePassword } = require('../utils/hashPassword'); // Importer les fonctions de hachage

class AuthService {
    static async register(userData) {
        const { username, email, password, gender, phone, dateOfBirth, lastnames } = userData;

        // Hacher le mot de passe avant de le sauvegarder dans la base de données
        const hashedPassword = await hashPassword(password);
        console.log(userData)
        const user = new User({
            username,
            email,
            password: hashedPassword,
            gender: gender,
            phone: phone,
            dateOfBirth: dateOfBirth,
            lastnames: lastnames
        });
        user.save();
        try {
            await user.save();
            var sender = new SendMailService();
            await sender.sendEmail('Welcome to our platform', 'You have successfully registered', email);
            return user;
        } catch (error) {
            throw new Error('Email already exists');
        }
    }

    static async login({ email, password }) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Comparer le mot de passe en texte brut avec le mot de passe haché
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshtoken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        // return token;
        return { access: token, refresh: refreshtoken };
    }
    static refreshToken(refreshToken) {
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        const token = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
}

module.exports = AuthService;
