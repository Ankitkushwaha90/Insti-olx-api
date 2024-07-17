// product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String
});

const Product = mongoose.model('Product', productSchema);

const find = () => Product.find();
const findById = (id) => Product.findById(id);
const findByIdAndUpdate = (id, update, options) => Product.findByIdAndUpdate(id, update, options);
const findByIdAndDelete = (id) => Product.findByIdAndDelete(id);

export default Product;
export { find, findById, findByIdAndUpdate, findByIdAndDelete };
