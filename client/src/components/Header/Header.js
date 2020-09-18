import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuth } from '../../context/auth';
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const { setAuthTokens, authToken } = useAuth();

    if (authToken) {
        return (
            <header className="header">
                <div className="header__bodyMenu">
                    <Link to="/" className="header__logo">stocky</Link>
                    <nav className="header__navMenu">
                        <ul className="header__navMenuLinks">
                            <li ><Link to="/trader" className="header__navMenuLink">Trader</Link></li>
                            <li ><Link to="/portfolio" className="header__navMenuLink">Portfolio</Link></li>
                            <li ><a href="/account" className="header__navMenuLink"><FontAwesomeIcon icon={faUser} /></a></li>
                            <li ><a href="/logout" className="header__navMenuLink"><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }else {
        return (
            <header className="header">
                <div className="header__body">
                    <Link to="/" className="header__logo">stocky</Link>
                    <nav className="header__nav">
                        <ul className="header__navLinks">
                            <li>
                                <Link to="/login" className="header__navLink login_link">Login/Signup</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
    
}

export default Header
