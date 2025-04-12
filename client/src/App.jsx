import React, { useState } from 'react';
import LeafUpload from './components/LeafUpload';
import ResultDisplay from './components/ResultDisplay';
import RecoveryPlan from './components/RecoveryPlan';

function App() {
  const [diseaseName, setDiseaseName] = useState('');

  return (
    <div className="App">
      <h1>🌿 VerdeVision</h1>
      <LeafUpload setDiseaseName={setDiseaseName} />
      {diseaseName && (
        <>
          <ResultDisplay diseaseName={diseaseName} />
          <RecoveryPlan diseaseName={diseaseName} />
        </>
      )}
    </div>
  );
}

export default App;
