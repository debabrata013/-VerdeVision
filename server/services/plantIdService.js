import axios from 'axios';

export const identifyPlantDisease = async (imageBase64) => {
  const apiKey = process.env.PLANT_ID_API_KEY;

  const response = await axios.post(
    'https://api.plant.id/v3/health_assessment',
    {
      images: [imageBase64],
      similar_images: true
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey
      }
    }
  );

  return response.data;
};
