import React from 'react';
import './Button.scss'; // Import your button's CSS

const Button = ({ label, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
