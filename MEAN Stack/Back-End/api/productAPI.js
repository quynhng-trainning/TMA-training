var mongoose = require('mongoose');
var ProductModel = require('../models/ProductModel');

var productAPI = {
    findAll: function (req, res) {
        ProductModel.find({}, {}, function (err, products) {
            if (err) {
                throw err;
            } else {
                res.status(200).json(products);
                //res.write(JSON.stringify(products));
                //res.end();
            }
        });
    },
    find: function (req, res) {
        ProductModel.findOne({ _id: req.params.id }, {}, function (err, product) {
            if (err) {
                res.status(500).json({error: err});
            } else {
                res.status(200).json(product);
            }
        });
    },
    create: function (req, res) {
        var productModel = new ProductModel({
            name: req.body.name,
            price: req.body.price,
            status: req.body.status
        });
        productModel.save(function (error) {
            if (!error) {
                res.status(200).json({
                    message: 'created'
                });
            } else {
                res.status(500).send({ error: error });
            }
        });
    },
    update: function (req, res) {
        ProductModel.findById(req.params.id, function (error, productModel) {
            productModel.name = req.body.name;
            productModel.price = req.body.price;
            productModel.status = req.body.status;
            productModel.save(function (err) {
                if (err) {
                    res.status(500).json({error: err});
                } else {
                    res.status(200).json({result: 'ok'});
                }
            });
        });
    },    
    update2: function (req, res) {       
        ProductModel.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body,
            function(err, product) {
                if (err) {
                    res.status(500).json({error: err});
                } else {
                    res.status(200).json({result: 'ok'});
                }
            }
        );
    },
    delete: function (req, res) {
        ProductModel.findById(req.params.id, function (err, productModel) {
            if (err) {
                throw err;
            } else {
                productModel.remove(function (err) {
                    if (err) {
                        res.status(500).json({error: err});
                    } else {
                        res.status(200).json({result: 'ok'});
                    }
                });
            }
        });
    },
    delete2: function (req, res) {
        ProductModel.findOneAndRemove(req.params.id, function(err, product) {
            if (err) {
                throw err;
            }
            console.log('User successfully deleted!');
        });
    }
};

module.exports = productAPI;
