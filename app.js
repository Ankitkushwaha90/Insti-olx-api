
import express from 'express';
import { connect } from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './products.js';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
// Middleware
app.use(bodyParser.json());
app.use('/products.js', productRoutes);

// MongoDB connection
// const MONGO_URI = "mongodb+srv://ankitkushwaha90:ankitkushwahahacker99109@cluster0.lbucc1r.mongodb.net/mongospring";
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
