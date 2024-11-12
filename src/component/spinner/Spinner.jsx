import React from "react";
import "./spinner.css"

const Spinner = ({setSpinner}) => {
setTimeout(() => {
    setSpinner(false)
}, 1000)

  return (
    <div>
        
    <div className="spinner">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
    </div>
  );
};

export default Spinner;
