#!/bin/bash

# Go to client/src folder
cd src || exit

# Create components directory if it doesn't exist
mkdir -p components

# Create LeafUpload component
cat > components/LeafUpload.jsx << 'EOF'
import React, { useState } from 'react';
import axios from 'axios';

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
EOF

# Create ResultDisplay component
cat > components/ResultDisplay.jsx << 'EOF'
import React from 'react';

const ResultDisplay = ({ diseaseName }) => (
  <div>
    <h3>Disease Detected: {diseaseName}</h3>
  </div>
);

export default ResultDisplay;
EOF

# Create RecoveryPlan component
cat > components/RecoveryPlan.jsx << 'EOF'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecoveryPlan = ({ diseaseName }) => {
  const [plan, setPlan] = useState('');

  useEffect(() => {
    if (diseaseName) {
      axios.post('/api/recovery-advice', { diseaseName })
        .then((res) => setPlan(res.data))
        .catch((err) => console.error('Error:', err));
    }
  }, [diseaseName]);

  return (
    <div>
      <h3>Recovery and Treatment Plan</h3>
      <p>{plan || 'Loading recovery plan...'}</p>
    </div>
  );
};

export default RecoveryPlan;
EOF

echo "✅ Components created successfully inside src/components/"
