const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
    playlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

