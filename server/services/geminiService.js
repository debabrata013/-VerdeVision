import axios from 'axios';

export const getRecoveryAdvice = async (diseaseName) => {
  const prompt = `
    Provide an in-depth, comprehensive, and actionable plant recovery and treatment plan for a tree leaf disease: ${diseaseName}.
    Please include:
    - Detailed, step-by-step short-term recovery procedures.
    - Long-term care recommendations.
    - Natural remedies and organic treatments.
    - Preventive measures to avoid future outbreaks.
    - Environmental modifications and maintenance tips.
    The response should be detailed, well-structured, and written in a professional tone.
  `;
  
  const apiKey = process.env.GEMINI_API_KEY;

  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey,
    {
      contents: [{ parts: [{ text: prompt }] }]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};
