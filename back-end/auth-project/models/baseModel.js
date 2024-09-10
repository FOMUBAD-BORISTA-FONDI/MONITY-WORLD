// BaseModel.js
const bcrypt = require('bcrypt');

class BaseModel {
    constructor(schema) {
        schema.add({
            isDeleted: { type: Boolean, default: false },
        });

        schema.set('timestamps', true); // Ajoute les timestamps

        // Ajout de la méthode de comparaison de mot de passe
        schema.methods.comparePassword = function (password) {
            return bcrypt.compareSync(password, this.password);
        };
    }
}

module.exports = BaseModel;
