'use strict';

const axios = require('axios');
const { fruitModel, userModel } = require('../Models/Fruits.Model');

const seedFruitsData = async () => {
    let url = 'https://fruit-api-301.herokuapp.com/getFruit'
    let fruitsData = await axios.get(url);

    let cleanData = fruitsData.data.fruits.map(elem => {
        return new fruitModel({
            name: elem.name,
            image: elem.image,
            price: elem.price,
        })
    });
    cleanData.map(elem => elem.save());
}

const getFruitData = async (req, res) => {
    let fruitsDat = await fruitModel.find({});
    res.status(200).json(fruitsDat);
}

const createUser = async (req, res) => {
    let email = req.params.email;
    let checkEmail = await userModel.exists({ email })
    if (checkEmail) {
        res.status(200).send("account is existed ");
    } else {
        let user = new userModel({ email });
        user.save();
        res.status(201).json(`${email} Created`);
    }
}

const addToFav = async (req, res) => {
    let email = req.params.email;
    let favFruitId = req.params.favFruitId;
    let favFruit = await fruitModel.findOne({ _id: favFruitId })
    let userData = await userModel.findOne({ email });
    userData.favFruits.push(favFruit);
    userData.save();
    res.status(200).json(userData);
}

const deleteFav = async (req, res) => {
    let email = req.params.email;
    let fruitId = req.params.fruitId;
    let userData = await userModel.findOne({ email });
    userData.favFruits.map((elem, index) => {
        if (elem._id === fruitId) userData.favFruits.splice(index, 1);
    });
    userData.save();
    res.status(200).json(userData);
}

const updateFav = async (req, res) => {
    let email = req.params.email;
    let fruitId = req.params.fruitId;
    let fruitItem = req.body;
    let userData = await userModel.findOne({ email });
    userData.favFruits.map(elem => {
        if (elem._id === fruitId) {
            elem.name = fruitItem.name;
            elem.image = fruitItem.image;
            elem.price = fruitItem.price;
        };
    });
    userData.save();
    res.status(200).json(userData);
}



module.exports = {
    seedFruitsData,
    getFruitData,
    createUser,
    addToFav,
    deleteFav,
    updateFav,
}