import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import plantRoutes from './routes/plantRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); // for base64 images or JSON payloads

app.use('/api/plant', plantRoutes);

app.listen(PORT, () => {
  console.log(`🌱 VerdeVision server running on port ${PORT}`);
});
