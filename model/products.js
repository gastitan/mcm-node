const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    productCategory: {type: String, required:true},
    productImage: String,
    productSeller: String,
    isBestProduct: Boolean,
    isTopProduct: Boolean,
    productRating: Number
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
