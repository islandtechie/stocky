import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
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

export default Header