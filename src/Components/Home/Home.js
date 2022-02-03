import React from 'react';
import { NavLink } from 'react-router-dom';
import AppIntroduction from './Home/AppIntroduction/AppIntroduction.js';
import MobileSignal from './Home/MobileSignal/MobileSignal.js';

const Home = () => {
    return (
        <div>
            {/* ==== home page link to dashbord==== */}
            <NavLink style={{textDecoration:'none'}} to="dashbord">
                <MobileSignal></MobileSignal>
                <AppIntroduction></AppIntroduction>
            </NavLink>
        </div>
    );
};

export default Home;