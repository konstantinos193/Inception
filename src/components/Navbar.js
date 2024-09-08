import React from 'react';
import { FaSearch, FaDiscord } from 'react-icons/fa'; // Remove FaTimes import
import './navbar.css';
import xLogo from '../assets/xlogo.png'; // Import the xlogo image

const Navbar = () => {
    const handleDiscordClick = () => {
        window.open('https://discord.gg/gKZE3dsH', '_blank', 'noopener,noreferrer');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="Logo" className="navbar-logo" />
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
                            <a href="#home">HOME</a>
                        </li>
                        <li>
                            <a href="#explore">EXPLORE</a>
                        </li>
                        <li>
                            <a href="#create">CREATE</a>
                        </li>
                        <li>
                            <a href="#blog">BLOG</a>
                        </li>
                        <li>
                            <a href="#docs">DOCS</a>
                        </li>
                    </ul>
                    <div className="navbar-icons">
                        <div className="navbar-icon" onClick={handleDiscordClick}>
                            <FaDiscord />
                        </div>
                        <div className="navbar-icon">
                            <img src={xLogo} alt="X Logo" className="navbar-xlogo" /> {/* Replace FaTimes with X logo */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;