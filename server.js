'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

const {
    seedFruitsData,
    getFruitData,
    createUser,
    addToFav,
    deleteFav,
    updateFav
} = require('./Controllers/Fruits.Controller');

mongoose.connect(`${MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get('/', (req, res) => { res.status(200).json({ massage: "I Am Working" }); });

server.get('/setData', seedFruitsData);
server.get('/getData', getFruitData);
server.post('/creatUser/:email', createUser);
server.put('/addToFav/:email', addToFav);
server.delete('/deleteFav/:email/:fruitId', deleteFav);
server.put('/updateFav/:email/:fruitId', updateFav);

server.listen(PORT, () => console.log(`listening in ${PORT}`));