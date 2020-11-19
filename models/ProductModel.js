const mongoose = require("mongoose")
const mongodb = require('../config/mongodb')

const productSchema = new mongoose.Schema({
    title: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String,
    params: {
        price: mongoose.Schema.Types.Number,
        quantity: mongoose.Schema.Types.Number
    }
});

const TodoModel = mongodb.model("Product", productSchema);

module.exports = TodoModel;
