import { identifyPlantDisease } from '../services/plantIdService.js';
import { getRecoveryAdvice } from '../services/geminiService.js';

export const detectDisease = async (req, res) => {
  try {
    const { imageBase64 } = req.body;
    const result = await identifyPlantDisease(imageBase64);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to detect disease' });
  }
};

export const getRecoveryPlan = async (req, res) => {
  try {
    const { diseaseName } = req.body;
    const recovery = await getRecoveryAdvice(diseaseName);
    res.json({ recovery });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get recovery advice' });
  }
};
