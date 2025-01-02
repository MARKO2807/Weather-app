import React from "react";
import "./Spinner.css";

const Spinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="spinner-div">
      <p>Fetching data...</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
