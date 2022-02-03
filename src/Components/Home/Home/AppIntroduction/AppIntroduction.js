import React from 'react';
import img from './../../../Images/Vector.png'
import img1 from './../../../Images/Vector (2).png'
import img2 from './../../../Images/Vector (1).png'
import img3 from './../../../Images/Vector (3).png'
import homePhoto from './../../../Images/6 1.png'
import './AppIntroduction.css'

const AppIntroduction = () => {
    return (
        <div className='col-xs-10' style={{marginTop:'150px'}}>
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img style={{marginLeft:'-20px'}} src={img3} alt="" />
            <h1 className='description'>Malls and Deals</h1>
            <img src={homePhoto} alt="" />
            
            
        </div>
    );
};

export default AppIntroduction;