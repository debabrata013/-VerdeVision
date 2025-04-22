// import React from 'react';

// const ResultDisplay = ({ diseaseName }) => (
//   <div>
//     <h3>Disease Detected: {diseaseName}</h3>
//   </div>
// );

// export default ResultDisplay;

import React from 'react';
import { AlertCircle, Info } from 'lucide-react';

const ResultDisplay = ({ diseaseName }) => {
  if (!diseaseName) {
    return null;
  }

  // Calculate severity level based on disease name (this is just for UI demonstration)
  // In a real app, you'd get this from your API
  const getSeverityInfo = (disease) => {
    // This is just a simple example - in a real app you'd have actual data
    const severityMap = {
      'Powdery Mildew': { level: 'medium', color: 'yellow' },
      'Black Spot': { level: 'high', color: 'red' },
      'Leaf Rust': { level: 'high', color: 'red' },
      'Aphid Infestation': { level: 'medium', color: 'yellow' },
      'Bacterial Blight': { level: 'high', color: 'red' },
      'Leaf Curl': { level: 'low', color: 'green' },
      'Mosaic Virus': { level: 'high', color: 'red' },
    };
    
    return severityMap[disease] || { level: 'medium', color: 'yellow' };
  };
  
  const severity = getSeverityInfo(diseaseName);
  
  const getSeverityBadge = () => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium uppercase";
    
    if (severity.color === 'red') {
      return <span className={`${baseClasses} bg-red-100 text-red-800`}>High Severity</span>;
    } else if (severity.color === 'yellow') {
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Medium Severity</span>;
    } else {
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Low Severity</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">Diagnosis Results</h3>
      </div>
      
      <div className="bg-gray-50 rounded-md p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase mb-1">Disease Detected</p>
            <p className="text-lg font-bold text-gray-900">{diseaseName}</p>
          </div>
          <div className="mt-2 md:mt-0">
            {getSeverityBadge()}
          </div>
        </div>
        
        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <p className="text-sm text-gray-600">
              This diagnosis is based on image analysis. For complete verification, 
              consider consulting with a plant pathologist or agricultural expert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ResultDisplay;