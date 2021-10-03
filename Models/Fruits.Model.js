'use strict';

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number
})

const usersSchema = new mongoose.Schema({
    email: String,
    favFruits: Array
})

const fruitModel = mongoose.model('allfruit', fruitSchema);
const userModel = mongoose.model('users', usersSchema);

module.exports = {
    fruitModel,
    userModel
}
