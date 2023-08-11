// DropdownSelect.js

import React, { useState, useRef, useEffect } from 'react';
import './DropdownSelect.scss';
import DropdownIcon from '../../Assets/dropdown-icon.svg';

const DropdownSelect = ({ options, onSelect, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCustomSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-select" ref={dropdownRef}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : placeholder}
        <img src={DropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
      </div>
      {isOpen && (
        <div className="options-list">
          {options.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={() => handleCustomSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
