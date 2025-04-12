import { identifyPlantDisease } from '../services/plantIdService.js';  // Placeholder for your Plant API service
import { getRecoveryAdvice } from '../services/geminiService.js';  // Placeholder for your Gemini API service

// Function to handle disease detection from uploaded image
export const detectDisease = async (req, res) => {
  try {
    // Access the uploaded file from Multer
    const imageBase64 = req.file.buffer.toString('base64');  // Convert image buffer to base64 string
    const result = await identifyPlantDisease(imageBase64);  // Call your Plant API service for disease detection
    res.json(result);  // Send back the result from the disease identification
  } catch (err) {
    res.status(500).json({ error: 'Failed to detect disease' });  // Error handling
  }
};

// Function to handle recovery advice based on disease name
export const getRecoveryPlan = async (req, res) => {
  try {
    const { diseaseName } = req.body;  // Extract disease name from request body
    const recovery = await getRecoveryAdvice(diseaseName);  // Call your Gemini API for recovery advice
    res.json({ recovery });  // Send back the recovery plan
  } catch (err) {
    res.status(500).json({ error: 'Failed to get recovery advice' });  // Error handling
  }
};
