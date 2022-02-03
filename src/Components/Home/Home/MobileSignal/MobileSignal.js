import React from 'react';
import './MobileSignal.css'
import img5 from './../../../Images/Cellular Connection.png'

const MobileSignal = () => {
    return (
        <div className='signal'>
            <div>9:41</div>
            <div>
                {/* i do not ge Related icon form fontawosome so i use here img which is expeor from your Figma */}
                <img src={img5} alt="" />
               <i style={{margin: "0 5px"}}  class="fas fa-wifi"></i>
               <i class="fas fa-battery-full"></i>
            </div>
        </div>
    );
};

export default MobileSignal;