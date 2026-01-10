import React from 'react';
import './Matrix.css';

const Matrix = ({ onToggle, isActive }) => {
  const handleEscape = () => {
    if (onToggle) {
      onToggle(!isActive);
    }
  };

  return (
    <div className="matrix-section">
      <div className="matrix-container">
        <div className="matrix-content">
          <h2 className="matrix-question">What do you choose Mr. Anderson?</h2>
          <button className="matrix-escape-btn" onClick={handleEscape}>
            {isActive ? 'RETURN' : 'ESCAPE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Matrix;

