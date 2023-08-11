import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import Logo from "../../Assets/logo.svg";
import WalletIcon from "../../Assets/wallet-icon.svg";
import Trade from "../../Assets/trade.svg";
import Analyze from "../../Assets/analyze.svg";
import Portfolio from "../../Assets/portfoli.svg";
import Transaction from "../../Assets/transaction.svg";
import Polygon from "../../Assets/Polygon.svg";

const Header = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };

    return (
        <>
            <div className="Header-nav">
                <div className="header">
                    <div className="left brand-logo">
                        <img className="" src={Logo} alt="Logo" />
                    </div>
                    <div className="center">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    activeClassName="active"
                                    onClick={() => handleMenuItemClick(0)}
                                >
                                    Trade &amp; Invest
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio"
                                    activeClassName="active"
                                    onClick={() => handleMenuItemClick(1)}
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/holdings"
                                    activeClassName="active"
                                // onClick={() => handleMenuItemClick(2)}
                                >
                                    Holdings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/transactions"
                                    activeClassName="active"
                                // onClick={() => handleMenuItemClick(3)}
                                >
                                    Transactions
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <button className="Mobile-btn">
                            <span>
                                <img
                                    className="icon-mobile-style"
                                    src={WalletIcon}
                                    alt="Wallet Icon"
                                />
                            </span>
                            <span className="hide-desktop">Connect wallet</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mobile-menu">
                <div className="bottom-menu">
                    <div className="blur-object-menu">
                        {" "}
                        <img src={Polygon} alt="Polygon" />
                    </div>
                    <div className="menu-content">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <img className="mobile-menu-icon" src={Trade} alt="Trade" />
                                    <span>Trade</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/analyze">
                                    <img
                                        className="mobile-menu-icon"
                                        src={Analyze}
                                        alt="Analyze"
                                    />
                                    <span>Analyze</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio">
                                    <img
                                        className="mobile-menu-icon"
                                        src={Portfolio}
                                        alt="Portfolio"
                                    />
                                    <span>Portfolio</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/transactions">
                                    <img
                                        className="mobile-menu-icon"
                                        src={Transaction}
                                        alt="Transactions"
                                    />
                                    <span>Transactions</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
