import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss'; // Import your stylesheet

const ToggleSwitch = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="toggle-switch">
      {options.map((option) => (
        <div
          key={option.value}
          className={`toggle-option ${option.value === selectedOption ? 'selected' : ''}`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

ToggleSwitch.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ToggleSwitch;
