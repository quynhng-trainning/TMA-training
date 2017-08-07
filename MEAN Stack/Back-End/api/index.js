var express = require('express');

var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/demosession1', 
    { useMongoClient: true });

var productAPI = require('./productAPI.js');

// Product API
router.get('/product/find_all', productAPI.findAll);
router.get('/product/find/:id', productAPI.find);
router.post('/product/create', productAPI.create);
router.put('/product/update/:id', productAPI.update);
router.put('/product/update2/:id', productAPI.update2);
router.delete('/product/delete/:id', productAPI.delete);
router.delete('/product/delete2/:id', productAPI.delete);

module.exports = router;
