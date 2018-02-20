const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    googleId: String,
    facebookId: String,
    email: String,
    name: String,
    photo: String,
    gender: String,
    itemDNA: [Number]
})

mongoose.model('user', users);