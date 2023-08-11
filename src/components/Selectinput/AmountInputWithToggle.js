import React, { useState } from 'react';
import './ModalSelectInput.scss'; 
import ToggleSwitch from './ToggleSwitch'; 

const AmountInputWithToggle = ({ onAmountChange }) => {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('usdc');

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
      <row>      <label htmlFor="amount">Amount:</label></row>

      <div className="input-container">

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <ToggleSwitch
          options={[
            { label: 'USDC', value: 'usdc' },
            { label: 'ETH', value: 'eth' },
          ]}
          selectedOption={selectedCurrency}
          onSelect={handleCurrencyChange}
        />
      </div>
    </div>
  );
};

export default AmountInputWithToggle;
