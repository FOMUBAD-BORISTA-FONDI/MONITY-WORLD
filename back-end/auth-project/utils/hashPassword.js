const bcrypt = require('bcrypt');

// Fonction pour hacher un mot de passe
const hashPassword = async (password) => {
    try {
        const saltRounds = 10; // Nombre de tours pour générer le sel
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Failed to hash password');
    }
};

// Fonction pour comparer un mot de passe en texte brut avec un mot de passe haché
const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Failed to compare password');
    }
};

// Exporter les fonctions
module.exports = {
    hashPassword,
    comparePassword,
};
