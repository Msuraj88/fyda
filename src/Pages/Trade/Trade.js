import React, { useState } from 'react';
import './trade.scss';
import Header from '../../components/Header/Header';
import Row from 'react-bootstrap/Row';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AnalyticsLogo from '../../Assets/analytics.gif';
import AmountInputWithToggle from '../../components/Selectinput/AmountInputWithToggle';
import Tab from '../../components/Tabs/Tabs';
import DropdownSelect from '../../components/DropdownSelect/DropdownSelect';
import CustomCheckbox from '../../components/Checkbox/CustomCheckbox';
import Inputwithtoggle from '../../components/InputwithToggle/Inputwithtoggle';
import Button from '../../components/Button/Button';
import SelectWithDialog from '../../components/SelectWithDialog/SelectWithDialog';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';

const Trade = () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleSelect = (option) => {
        console.log('Selected option:', option);
    };

    const handleAmountChange = (newAmount) => {
        console.log('Amount changed:', newAmount);
    };

    const usdCurrencyOptions = [
        { label: 'USDC', value: 'USDC' },
        { label: '%', value: '%' },
    ];

    const frequesnyoptions = [
        { label: 'Days', value: 'Days' },
        { label: 'Hours', value: 'Hours' },
    ];

    const tabOptions = [
        { label: 'Floor', value: 'Floor' },
        { label: 'Buy', value: 'Buy' },
        { label: 'Sell', value: 'Sell' },
    ];

    const [selectedTab, setSelectedTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };

    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    const tokenOptions = [
        {
            label: 'ETH',
            icon: 'https://www.linkpicture.com/q/ETH44.svg',
            value: 'ETH',
            description: 'Ethereum', // Add description
        },
        {
            label: 'Tether USD',
            icon: 'https://www.linkpicture.com/q/USDT.svg',
            value: 'Tether',
            description: 'Ethereum', // Add description
        },
        {
            label: 'UNI',
            icon: 'https://www.linkpicture.com/q/UNIicon.svg',
            value: 'Tether',
            description: 'Ethereum', // Add description
        },
        {
            label: 'EGLD',
            icon: 'https://www.linkpicture.com/q/EGLD.svg',
            value: 'Tether',
            description: 'Elrond Network', // Add description
        },
        {
            label: 'UNI',
            icon: 'https://www.linkpicture.com/q/ICP_1.svg',
            value: 'Tether',
            description: 'Ethereum', // Add description
        },
        // Add more options...
    ];

    const handleTokenSelect = (selectedToken) => {
        console.log('Selected token:', selectedToken);
        // Do something with the selected token
    };

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };


    return (
        <div>
            <Header />
            <div className='overlap-group'>
                <div className='Content-box'>
                    <Row className="box-header justify-content-between">
                        <div className="box-header">
                            <h5>Create Strategy</h5>
                            <img className='box-header-icon' src={AnalyticsLogo} alt="Analytics Logo" />
                        </div>
                    </Row>

                    <div className="box-body-content">

                        <div className='type-value padding-0'>
                            <div className="select-container">
                                <label>Buy and Sell</label>
                                <SelectWithDialog
                                    options={tokenOptions}
                                    onSelect={handleTokenSelect}
                                    selectButtonLabel="Select Token"
                                />
                            </div>
                            <div className="select-container">
                                <label>With</label>
                                <SelectWithDialog
                                    options={tokenOptions}
                                    onSelect={handleTokenSelect}
                                    selectButtonLabel="Stable Token"
                                />
                            </div>

                        </div>



                        <Row className='m-b-20'>
                            <AmountInputWithToggle onAmountChange={handleAmountChange} />
                        </Row>

                        <Row className='floor-card margin-0'>
                            <div className='Tabs-section padding-0'>
                                <Tab options={tabOptions} selectedOption={selectedTab} onSelect={handleTabSelect} />
                            </div>

                            <div className='Configure-info'>
                                <p><span className='Configure-icon'><InfoOutlinedIcon /></span>Configure buy type and DCA strategy</p>
                            </div>

                            <div className='type-value padding-0'>
                                <DropdownSelect className='type-dropdown' options={options} onSelect={handleSelect} placeholder="Type" />
                                <DropdownSelect options={options} onSelect={handleSelect} placeholder="Type" />
                            </div>
                        </Row>

                        <Row className='floor-card margin-0'>
                            <div className='Tabs-section padding-0'>
                                <CustomCheckbox label="CDA" />
                            </div>

                            <Row className='CDA-check'>
                                <div className='padding-0'>
                                    <div className='m-b-20'>
                                        <Inputwithtoggle
                                            onAmountChange={handleAmountChange}
                                            currencyOptions={usdCurrencyOptions}
                                            defaultCurrency="USDC"
                                            amountLabel="Amount"
                                        />
                                    </div>

                                    <Inputwithtoggle
                                        className="m-t-20"
                                        onAmountChange={handleAmountChange}
                                        currencyOptions={frequesnyoptions}
                                        defaultCurrency="Days"
                                        amountLabel="Frequency"
                                    />
                                </div>
                            </Row>
                        </Row>

                        <div>
                            {/* <Button label="Preview" onClick={handleButtonClick} className="my-custom-class" /> */}
                            <Button
                                label="Preview"
                                onClick={handleOpenDialog}
                                className="my-custom-class m-b-20"
                            >
                                Preview
                            </Button>
                            <ConfirmDialog open={dialogOpen} onClose={handleCloseDialog} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trade;
