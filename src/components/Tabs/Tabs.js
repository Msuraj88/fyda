import React from 'react';
import './Tab.scss';

const Tab = ({ options, selectedOption, onSelect }) => {
  return (
    <>
      {/* <label htmlFor="amount" className='padding-0'>Amount:</label> */}
      <div className="Tab-switch">
        {options.map((option) => (
          <div
            key={option.value}
            className={`tab-option ${option.value === selectedOption ? 'selected' : ''}`}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>

    </>

  );
};

export default Tab;
