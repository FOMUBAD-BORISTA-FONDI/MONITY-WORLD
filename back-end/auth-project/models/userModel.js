
const mongoose = require('mongoose');
const BaseModel = require('./baseModel');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastnames: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    role: { type: String, default: 'user' },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    defaultCurency:{type:String}
});

// Appliquer BaseModel
new BaseModel(userSchema);

const User = mongoose.model('User', userSchema);
module.exports = User;
