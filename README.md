
## 🌿 **VerdeVision - Tree Leaf Disease Detection App**

**VerdeVision** is a full-stack web application that allows users to upload a picture of a tree leaf and instantly get a prediction about whether the leaf is diseased or healthy. If diseased, the app provides a detailed recovery plan using AI.

---

### 🔧 **How it works**

#### 🖼️ Frontend (React + Tailwind CSS)
- Users can upload a picture of a leaf via a simple and clean interface.
- The image is previewed on the page before submission.
- On clicking "Detect Disease", the image is sent to the backend.
- The results (disease name, confidence, and recovery suggestions) are displayed dynamically.

#### 🌐 Backend (Node.js + Express)
- Receives the image from the frontend (in base64 or file format).
- Sends the image to the **Plant.id API** to detect diseases.
- Sends the detected disease name to **Gemini (or ChatGPT API)** to fetch a personalized recovery plan.
- Returns the response back to the frontend.

---

### 🧠 **AI Integration**

- **Plant.id API** is used for:
  - Image analysis
  - Detecting leaf diseases
  - Getting confidence scores and disease details

- **Gemini AI** (or ChatGPT API) is used for:
  - Generating a detailed and customized **recovery plan** based on the disease detected.

---

### 🔒 CORS & Security
- CORS is enabled on the backend to allow requests from `http://localhost:5173` (React frontend).
- Proper error handling is implemented to catch API failures or invalid inputs.

---

### 📦 Technologies Used

| Frontend        | Backend         | AI Services         | Deployment (Planned) |
|----------------|------------------|----------------------|----------------------|
| React.js        | Node.js + Express| Plant.id API         | Vercel / Netlify (Frontend) |
| Tailwind CSS    | dotenv, cors     | Gemini (ChatGPT API) | Render / Railway (Backend) |
| Axios           | body-parser      |                      | AWS S3 (for file handling) |

---

### 🎯 Features

- Upload tree leaf image
- Get disease detection with confidence score
- AI-powered recovery plan
- Clean, mobile-friendly UI
- Modular, scalable codebase

---

### 🧪 Upcoming Enhancements

- User authentication (login to save results)
- History of previously detected diseases
- Multi-language support
- Real-time camera capture (mobile devices)

