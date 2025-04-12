import express from 'express';
import { detectDisease, getRecoveryPlan } from '../controllers/plantController.js';

const router = express.Router();

router.post('/detect', detectDisease);
router.post('/recovery', getRecoveryPlan);

export default router;
