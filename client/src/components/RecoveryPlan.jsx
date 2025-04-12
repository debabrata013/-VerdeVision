// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecoveryPlan = ({ diseaseName }) => {
//   const [plan, setPlan] = useState('');

//   useEffect(() => {
//     if (diseaseName) {
//       axios.post('/api/recovery-advice', { diseaseName })
//         .then((res) => setPlan(res.data))
//         .catch((err) => console.error('Error:', err));
//     }
//   }, [diseaseName]);

//   return (
//     <div>
//       <h3>Recovery and Treatment Plan</h3>
//       <p>{plan || 'Loading recovery plan...'}</p>
//     </div>
//   );
// };

// export default RecoveryPlan;

import React, { useState, useEffect } from 'react';
import axios from '../axios'; // ya './axios' depending on location

import { Loader, CheckCircle, AlertTriangle, SprayCanIcon } from 'lucide-react';

const RecoveryPlan = ({ diseaseName }) => {
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (diseaseName) {
      setLoading(true);
      setError(null);
      
      axios.post('/recovery-advice', { diseaseName })
        .then((res) => {
          setPlan(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          setError('Failed to load recovery plan. Please try again later.');
          setLoading(false);
        });
    } else {
      setPlan('');
    }
  }, [diseaseName]);

  if (!diseaseName) {
    return null;
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
          <Loader className="animate-spin h-8 w-8 mb-3" />
          <p>Generating recovery plan...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
          <p className="text-red-700">{error}</p>
        </div>
      );
    }

    if (!plan) {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-gray-500 italic">
          No recovery plan available yet.
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
          <p className="text-green-800">
            A recovery plan has been generated for treating <span className="font-semibold">{diseaseName}</span>.
          </p>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          {typeof plan === 'string' ? plan : (
            <>
              {plan.description && <p>{plan.description}</p>}
              
              {plan.steps && (
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Treatment Steps:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {plan.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {plan.prevention && (
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Prevention Tips:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {plan.prevention.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4 border-b pb-4">
        <SprayCanIcon className="h-6 w-6 text-green-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">Recovery and Treatment Plan</h3>
      </div>
      
      {renderContent()}
    </div>
  );
};

export default RecoveryPlan;