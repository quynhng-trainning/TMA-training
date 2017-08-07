var mongoose = require('mongoose');

// Define our product schema
var ProductSchema   = new mongoose.Schema(
    {
      name: String,
      price: Number,
      status: Boolean
    },
    {
        versionKey: false
    }
);

// Export the Mongoose model
module.exports = mongoose.model('ProductModel', ProductSchema, 'product');

