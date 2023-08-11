import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ListItemIcon,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import Slide from '@mui/material/Slide';
import './SelectwithDialog.scss';
import Backicon from '../../Assets/back.svg';
import SearchIcon from '@mui/icons-material/Search';
import TokenSelectIcon from '../../Assets/token-sel-icon.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SelectWithDialog = ({
  options,
  onSelect,
  selectButtonLabel = 'Select',
}) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpenDialog = () => {
    setOpen(true);
    setSearchValue('');
    setFilteredOptions(options);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    handleCloseDialog();
  };

  return (
    <div className='Select-dialog-custom'>
      <Button
        className="Select-input-style"
        onClick={handleOpenDialog}
        variant="outlined"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="icon-container">
          <CircleIcon style={{ marginRight: '8px', color: 'rgb(90, 98, 112)' }} />

          {selectButtonLabel}
        </div>
        <ArrowDropDownIcon />
      </Button>

      <Dialog
        className="Dialog-style"
        open={open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <div className='Header-select'>
            <img onClick={handleCloseDialog}
              src={Backicon}
              alt="SVG Icon"
              style={{ width: '24px', height: '24px', marginRight: '8px' }}
            />
            <h2>     Select a Token</h2>
          </div>
        </DialogTitle>

        <DialogContent className='Token-select-dialog'>
          <TextField
            placeholder="Search by name or paste address"
            value={searchValue}
            onChange={handleSearchChange}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <ListItemIcon className='search-placeholder'>
                  <SearchIcon />
                </ListItemIcon>
              ),
            }}
            sx={{
              // Custom styles here
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                border: '1px solid #7A603A',
                color: '#fff',
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
          />
          {filteredOptions.map((option) => (
            <div
              className="Token-lists"
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <div className="token-icon">
                <ListItemIcon style={{ marginRight: '8px', }}>
                  <img
                    src={option.icon}
                    alt="Option Icon"
                    className=''
                    style={{ width: '38px', height: '38px', }}
                  />
                </ListItemIcon>
              </div>
              <div className="token-label">
                <h5>{option.label}</h5>
                <small>{option.description}</small>
              </div>
              <div className="right-icon">
                <img src={TokenSelectIcon} alt="Right Icon" style={{ width: '26px', height: '26px' }} />
              </div>
            </div>
          ))}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default SelectWithDialog;
