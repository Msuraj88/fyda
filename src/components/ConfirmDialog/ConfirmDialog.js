import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ConfirmDialog.scss';
import ETH from '../../Assets/ETH.svg';
import USDC from '../../Assets/USDC.svg';
import Button from '../../components/Button/Button';



const ConfirmDialog = ({ open, onClose }) => {
    return (
        <Dialog className='confirm-dialog-card' open={open} onClose={onClose}>
            <div className="overlap">
                <div className='dialog-header'>
                    <h4>Confirm strategy</h4>
                    <CloseIcon onClick={onClose} className='close-icon' />
                </div>

                <img
                    className="star-img"
                    alt="Star img"
                    src="https://generation-sessions.s3.amazonaws.com/971f874c2bd17d952d52ab6fd6c3ae29/img/star-img-1@2x.png"
                />
                <img
                    className="star-img2"
                    alt="Star img"
                    src="https://generation-sessions.s3.amazonaws.com/971f874c2bd17d952d52ab6fd6c3ae29/img/star-img@2x.png"
                />

                <DialogContent>
                    <div className='dialog-content-body'>
                        <div className='Token-info'>
                            <div className="section-with-icon">
                                <div className="left-content">
                                    <p className="title">Trade Token</p>
                                    <p className="separator">:</p>
                                </div>
                                <div className="right-content">
                                    <p className="title">ETH</p>
                                    <div className="icon"><img src={ETH} /></div>
                                </div>
                            </div>
                            <div className="section-with-icon">
                                <div className="left-content">
                                    <p className="title">Stable Token</p>
                                    <p className="separator">:</p>
                                </div>
                                <div className="right-content">
                                    <p className="title">USDC</p>
                                    <div className="icon"><img src={USDC} /></div>
                                </div>
                            </div>
                        </div>

                        <div className='investment-amount'>
                            <h4>Investment Amount</h4>
                            <div className='investment-amount-info'>
                                <p>10,000   USDC</p>
                                <p>$ 10,222</p>
                            </div>
                        </div>

                        <div className='investment-amount'>
                            <h4>Summary :</h4>
                            <div className='investment-amount-info'>
                                <p>Buy at</p>
                                <p>1500 USDC</p>
                            </div>
                            <div className="divider"></div>
                            <div className='investment-amount-info'>
                                <p>Buy at</p>
                                <p>1500 USDC</p>
                            </div>
                            <div className="divider"></div>
                            <div className='investment-amount-info'>
                                <p>Buy at</p>
                                <p>1500 USDC</p>
                            </div>
                        </div>

                        <div className='confirm-btn'>
                            <Button
                                label="Confirm"
                                className="my-custom-class"
                            >
                                Confirm
                            </Button>
                        </div>

                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default ConfirmDialog;
