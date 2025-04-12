import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';  // For file handling
import plantRoutes from './routes/plantRoutes.js';  // Import your routes

dotenv.config();

const app = express();

// CORS middleware setup

app.use(cors());
// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for handling image uploads (memory storage in this case)
const storage = multer.memoryStorage(); // Store file in memory, or configure to save on disk if needed
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } }); // Limit file size to 10MB

// Use routes for plant-related APIs
app.use('/api/plant', plantRoutes);

// Starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌱 VerdeVision server running on port ${PORT}`);
});
