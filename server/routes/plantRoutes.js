// import express from 'express';
// import { detectDisease, getRecoveryPlan } from '../controllers/plantController.js';

// const router = express.Router();

// router.post('/detect', detectDisease);
// router.post('/recovery', getRecoveryPlan);

// export default router;
import express from 'express';
import multer from 'multer'; // Import multer for file upload handling
import { detectDisease, getRecoveryPlan } from '../controllers/plantController.js';

const router = express.Router();

// Multer setup for handling image uploads (memory storage in this case)
const storage = multer.memoryStorage(); // Store file in memory, or configure to save on disk if needed
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } }); // Limit file size to 10MB

// Route for disease detection (image upload)
router.post('/detect', upload.single('image'), detectDisease);  // Handles file upload

// Route for recovery plan (disease name input)
router.post('/recovery', getRecoveryPlan);

export default router;
