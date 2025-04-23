// import React from 'react';

// const ResultDisplay = ({ diseaseName }) => (
//   <div>
//     <h3>Disease Detected: {diseaseName}</h3>
//   </div>
// );

// export default ResultDisplay;

import React from 'react';
import { AlertCircle, Info } from 'lucide-react';

const severityMap = {
  'Powdery Mildew': { level: 'Medium', color: 'yellow' },
  'Black Spot': { level: 'High', color: 'red' },
  'Leaf Rust': { level: 'High', color: 'red' },
  'Aphid Infestation': { level: 'Medium', color: 'yellow' },
  'Bacterial Blight': { level: 'High', color: 'red' },
  'Leaf Curl': { level: 'Low', color: 'green' },
  'Mosaic Virus': { level: 'High', color: 'red' },
};

const getSeverityInfo = (disease) =>
  severityMap[disease] || { level: 'Medium', color: 'yellow' };

const getSeverityBadge = (level, color) => {
  const base = 'px-3 py-1 rounded-full text-xs font-semibold uppercase transition-all';
  const colors = {
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
  };
  return (
    <span className={`${base} ${colors[color] ?? colors['yellow']}`}>
      {level} Severity
    </span>
  );
};

const ResultDisplay = ({ diseaseName }) => {
  if (!diseaseName) return null;

  const severity = getSeverityInfo(diseaseName);

  return (
    <section
      className="bg-white rounded-2xl shadow-lg p-6 mb-6 animate-fade-in"
      role="region"
      aria-labelledby="diagnosis-heading"
    >
      <header className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-6 w-6 text-red-500" />
        <h2 id="diagnosis-heading" className="text-xl font-semibold text-gray-800">
          Diagnosis Result
        </h2>
      </header>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Disease Detected
            </p>
            <p className="text-lg font-bold text-gray-900">{diseaseName}</p>
          </div>
          <div className="mt-3 md:mt-0">{getSeverityBadge(severity.level, severity.color)}</div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <p className="text-sm text-gray-600 leading-relaxed">
              This diagnosis is based on image analysis. For confirmation, please consult a plant
              pathologist or agricultural expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultDisplay;