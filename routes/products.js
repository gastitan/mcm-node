//const Joi = require('joi');
const express = require('express');
const Product = require('../model/products');

const router = express.Router();

router.get('/products/', (req,res) => {
	Product.find({}, function(err, result) {
        if (err) throw err;
        else res.send(result);
    });
});

router.get('/products/:id', (req,res) => {
    console.log(req.params.id);
    Product.findById(req.params.id, function (err, result) {
        if (err) throw err;
        else res.send(result);
    });
	
});

//router.post('/', products_controller.product_create);
router.post('/products/', (req,res) => {
    console.log(req.body);
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            productCategory: req.body.productCategory,
            productImage: req.body.productImage,
            productSeller: req.body.productSeller,
            productRating: req.body.productRating
        }
    );

    product.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send('Product Created successfully')
    })
});

router.put('/products/:id', function (req, res) {
    // use our product model to find the product we want
    Product.findById(req.body._id, function (err, product) {
        if (err) {
            res.send(err)
        }
        console.log(product);
        console.log(req.body);
        product.name = req.body.name
        product.description = req.body.description
        product.productCategory = req.body.productCategory
        product.price = req.body.price
        product.productImage = req.body.productImage
        product.productSeller = req.body.productSeller
        product.productRating = req.body.productRating
        // save the bear
        product.save(function (err, data) {
            if (err) {
                res.send(err)
            }
            console.log('Updating product', data)
            res.send(data)
        });

    });
});

module.exports = router;