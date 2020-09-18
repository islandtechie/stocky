import React from 'react';
import { Link } from 'react-router-dom';
import { faMoneyCheckAlt, faPortrait } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="getStarted">
            <h1 className="getStarted__title">Get Started</h1>
            <p>Click an Icon</p>
            <div className="getStarted__userChoice">
                <div className="getStarted__userTrading">
                    <Link to="/trader" className="getStarted__userTrading__img">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} />
                    </Link>
                    <h3 className="getStarted__userTrading__text">Start Trading</h3>
                </div>
                <div className="getStarted__userPortfolio">
                    <Link to="/portfolio" className="getStarted__userPortfolio__img">
                        <FontAwesomeIcon icon={faPortrait} />
                    </Link>
                    <h3 className="getStarted__userPortfolio__text">Your Portfolio</h3>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
