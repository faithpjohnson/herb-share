const mongoose = require('mongoose');

// Create your User Model
// must include google id
const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    googleId: String,
}, {
    timestamps: true
});

mongoose.exports = mongoose.model('User', userSchema);