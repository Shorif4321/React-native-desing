import React from 'react';
import { NavLink } from 'react-router-dom';
import health from './../../Images/Help & Resources.png'

const GameHeader = () => {
    return (
        <div>
            <div className='fulHeader container my-3'>
                <div className=' d-flex'>
                    <i className="fs-1 me-2  fas fa-arrow-circle-left"></i>
                    <h5>Game View</h5>
                </div>
                <div className='headerRight'>
                    <img className='mb-2' src={health} alt="" />
                     <NavLink to="/dashbord"> <i className="fs-1 me-2 fas fa-ellipsis-v text-black"></i></NavLink>
                </div>
            </div>
        </div>
    );
};

export default GameHeader;