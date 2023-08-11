import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Inputwithtoggle.scss'; // Import the corresponding CSS
import ToggleSwitch from '../Selectinput/ToggleSwitch'; // Assume you have a ToggleSwitch component

const AmountInputWithToggle = ({ onAmountChange, currencyOptions, defaultCurrency, amountLabel }) => {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="amount-input">
      <row> <label htmlFor="amount">{amountLabel}</label> </row>

      <div className="input-container">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <ToggleSwitch
          options={currencyOptions}
          selectedOption={selectedCurrency}
          onSelect={handleCurrencyChange}
        />
      </div>
    </div>
  );
};

AmountInputWithToggle.propTypes = {
  onAmountChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultCurrency: PropTypes.string.isRequired,
  amountLabel: PropTypes.string.isRequired,
};

export default AmountInputWithToggle;
