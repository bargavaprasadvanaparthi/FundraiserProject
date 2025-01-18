import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="header-container">
            <header className="header">
                <div className="header-logo">
                    <h1 className="header-logo-text">CharityFund - Make a Difference</h1>
                </div>
                <div className="header-hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <nav className="header-nav">
                    <ul className={`header-menu ${menuOpen ? 'header-menu-show' : 'hidden'}`}>
                        <li className="header-menu-item">
                            <Link to="/app/mainpage" className="header-link">Home</Link>
                        </li>
                        <li className="header-menu-item">
                            <Link to="/app/about" className="header-link">About Us</Link>
                        </li>
                        <li className="header-menu-item">
                            <Link to="/app/donate" className="header-link">Donate</Link>
                        </li>
                        <li className="header-menu-item">
                            <Link to="/app/donars" className="header-link">Donars</Link>
                        </li>
                        <li className="header-menu-item">
                            <Link to="/app/logout" className="header-link">Log out</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
