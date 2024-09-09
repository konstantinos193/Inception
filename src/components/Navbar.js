import React, { useState } from 'react';
import { FaSearch, FaDiscord } from 'react-icons/fa';
import './navbar.css';
import xLogo from '../assets/xlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [account, setAccount] = useState(null);

    const handleDiscordClick = () => {
        window.open('https://discord.gg/gKZE3dsH', '_blank', 'noopener,noreferrer');
    };

    const handleTwitterClick = () => {
        window.open('https://x.com/launchdreams', '_blank', 'noopener,noreferrer');
    };

    const handleConnectWalletClick = async () => {
        try {
            const accounts = await window.unisat.requestAccounts();
            setAccount(accounts[0]);
            console.log('Connect success', accounts);
        } catch (e) {
            console.log('Connect failed', e);
        }
    };

    const shortenAddress = (address) => {
        return `${address.slice(0, 5)}....${address.slice(-5)}`;
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="Logo" className="navbar-logo" />
                </Link>
            </div>
            <div className="navbar-content">
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="SEARCH COLLECTIONS"
                        className="navbar-search-input"
                    />
                    <FaSearch className="navbar-search-icon" />
                </div>
                <div className="navbar-links-container">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <a href="#explore">EXPLORE</a>
                        </li>
                        <li>
                            <a href="#create">CREATE</a>
                        </li>
                        <li>
                            <Link to="/dreams">DREAMS</Link>
                        </li>
                    </ul>
                    <div className="navbar-icons">
                        <div className="navbar-icon" onClick={handleDiscordClick}>
                            <FaDiscord />
                        </div>
                        <div className="navbar-icon" onClick={handleTwitterClick}>
                            <img src={xLogo} alt="X Logo" className="navbar-xlogo" />
                        </div>
                        <button className="connect-wallet-button" onClick={handleConnectWalletClick}>
                            {account ? shortenAddress(account) : 'Connect Wallet'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;