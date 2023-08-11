import React from "react";
import "../Styles/Header.scss";
import Logo from "../Assets/logo.svg";
import WalletIcon from "../Assets/wallet-icon.svg";
import Trade from "../Assets/trade.svg";
import Analyze from "../Assets/analyze.svg";
import Portfolio from "../Assets/portfoli.svg";
import Transaction from "../Assets/transaction.svg";
import Polygon from "../Assets/Polygon.svg";

function Header() {
  return (
    <>
      <div className="Header-nav">
        <div className="header">
          <div className="left brand-logo">
            <img className="" src={Logo} />
          </div>
          <div className="center">
            {/* <img className='mobile-logo' src={Logo} /> */}
            <ul>
              <li className="active">
                <a href="#">Trade & Invest</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Holdings</a>
              </li>
              <li>
                <a href="#">Transactions</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <button className="Mobile-btn">
              <span>
                <img className="icon-mobile-style" src={WalletIcon} />
              </span>
              <span className="hide-desktop">Connect wallet</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div class="bottom-menu">
          <div className="blur-object-menu">
            {" "}
            <img src={Polygon} />
          </div>
          <div className="menu-content">
            <ul>
              <li>
                <a>
                  <img className="mobile-menu-icon" src={Trade} />
                  <span>Trade</span>
                </a>
              </li>
              <li>
                <img className="mobile-menu-icon" src={Analyze} />
                <span>Analyze</span>
              </li>
              <li>
                <img className="mobile-menu-icon" src={Portfolio} />
                <span>Portfolio</span>
              </li>
              <li>
                <img className="mobile-menu-icon" src={Transaction} />
                <span>Transactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
