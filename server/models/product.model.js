console.log("product.model.js");

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Product Title is required."],
        minlength: [2, "Title must be 2 character or longer."]
    },

    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0, "Price must be 0 or greater."]
    },

    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [5, "Description must be 5 characters or longer."]
    }

}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);