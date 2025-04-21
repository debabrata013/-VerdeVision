const express = require('express');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const upload = multer({ dest: 'uploads/' });

const getRecoveryAdvice = async (disease) => {
  const prompt = `Provide an in-depth, comprehensive, and actionable plant recovery and treatment plan for a tree leaf disease: ${disease}.
    Please include:
    - Detailed, step-by-step short-term recovery procedures.
    - Long-term care recommendations.
    - Natural remedies and organic treatments.
    - Preventive measures to avoid future outbreaks.
    - Environmental modifications and maintenance tips.
    The response should be detailed, well-structured, and written in a professional tone.`;
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }]
    }
  );
  return response.data.candidates[0].content.parts[0].text;
};

app.post('/analyze',  async (req, res) => {
  try {
    const disease = req.body.disease;

    const recoveryPlan = await getRecoveryAdvice(disease);

    res.json({
      detectedDisease: disease,
      recoveryPlan: recoveryPlan
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Kuch gadbad hai bhai!' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server chal raha hai http://localhost:${PORT}`);
});
