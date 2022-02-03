import React from 'react';
import './DashHeader.css'
import logo from './../../Images/MAD Logo CTBG.png'
import health from './../../Images/Help & Resources.png'
import Navigation from './../../Images/Saved Navigation.png'
import svaeItems from './../../Images/Saved Items.png'
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const DashHeader = () => (
    <div>
        <div className='fulHeader'>
            <div className='headerLeft'>
                <div className='d-flex'>
                    <Navbar collapseOnSelect expand="lg" className="header-color">
                        <Container>
                            <Navbar.Toggle className="navToggle" aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse active id="responsive-navbar-nav">
                                {/* ========Link to Page===== */}
                                <nav className="ms-auto">
                                    <NavLink className="link-style" to="/home"> Home </NavLink>
                                    <NavLink className="link-style" to="/dashbord"> Dashbord </NavLink>
                                    <NavLink className="link-style" to="/game"> Game </NavLink>
                                </nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div>
                        <img className='img-fluid mt-3' src={logo} alt="" />
                    </div>
                </div>
            </div>
            
            {/* ====icon add==== */}
            <div className='headerRight'>
                <img src={health} alt="" />
                <img src={Navigation} alt="" />
                <img src={svaeItems} alt="" />
            </div>
        </div>
    </div>
);

export default DashHeader;