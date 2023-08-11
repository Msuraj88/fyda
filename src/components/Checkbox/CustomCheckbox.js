// CustomCheckbox.js
import React, { useState } from 'react';
import './CustomCheckbox.scss';
import checkmarkSvg from '../../Assets/checkmark.svg'; // Import the SVG icon

const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className="checkbox-icon">
        {isChecked && <img src={checkmarkSvg} alt="Checkmark" className="checkmark-icon" />}
      </span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
