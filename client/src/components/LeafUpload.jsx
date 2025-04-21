import React, { useState } from 'react';
import axios from '../axios';

const LeafUpload = ({ setDiseaseName }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setDiseaseName(response.data.diseaseName);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload a Leaf Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
};

export default LeafUpload;
// import React, { useState } from 'react';
// import axios from '../axios'; // ya './axios' depending on location

// import { Upload, Loader } from 'lucide-react';

// const LeafUpload = ({ setDiseaseName }) => {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   const handleImageUpload = async () => {
//     if (!image) return;
    
//     const formData = new FormData();
//     formData.append('file', image);
    
//     setLoading(true);
//     try {
//       const response = await axios.post('/analyze', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setDiseaseName(response.data.diseaseName);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const file = e.dataTransfer.files[0];
//       setImage(file);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Plant Disease Detector</h2>
      
//       <div 
//         className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'}`}
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//       >
//         <input 
//           type="file" 
//           onChange={handleFileChange}
//           accept="image/*"
//           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
//         />
        
//         {preview ? (
//           <div className="mb-4">
//             <img 
//               src={preview} 
//               alt="Leaf preview" 
//               className="h-48 w-auto object-contain rounded-md" 
//             />
//           </div>
//         ) : (
//           <div className="text-gray-500 mb-4">
//             <Upload className="mx-auto h-12 w-12 text-green-600" />
//             <p className="mt-2 text-sm font-medium">Drag & drop a leaf image here</p>
//             <p className="text-xs">or click to browse</p>
//           </div>
//         )}
//       </div>

//       <div className="mt-6">
//         <button 
//           onClick={handleImageUpload} 
//           disabled={!image || loading}
//           className={`w-full py-3 px-4 flex items-center justify-center rounded-md font-medium transition-colors ${!image ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : loading ? 'bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}
//         >
//           {loading ? (
//             <>
//               <Loader className="animate-spin h-5 w-5 mr-2" />
//               Analyzing Image...
//             </>
//           ) : (
//             <>Detect Disease</>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LeafUpload;