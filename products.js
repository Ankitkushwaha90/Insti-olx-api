// productRoutes.js

import { Router } from 'express';
import Product, { find, findById, findByIdAndUpdate, findByIdAndDelete } from './product.js';

const router = Router();

// Create Product
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read Products
router.get('/', async (req, res) => {
    try {
        const products = await find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read Product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Product
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
