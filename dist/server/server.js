import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Database connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in environment variables');
}
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
    if (err instanceof Error) {
        console.error('MongoDB connection error:', err.message);
    }
    else {
        console.error('MongoDB connection error:', err);
    }
});
// Routes
app.use('/api/auth', authRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
