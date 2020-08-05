import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;
            console.log(total);
            setTotalConnections(total);
        });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Poffy" />
                    <h2>Your online study platform</h2>
                </div>
                <img src={landingImg} alt="Study Platform" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study" />
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Teach" />
                        Teach
                    </Link>
                </div>

                <span className="total-connections">
                    Total of {totalConnections} connections already made <img src={purpleHeartIcon} alt="Purple Heart" />
                </span>
            </div>
        </div>
    )
}

export default Landing;