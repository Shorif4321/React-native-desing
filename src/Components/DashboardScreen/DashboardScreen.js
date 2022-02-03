import React from 'react';
import MobileSignal from '../Home/Home/MobileSignal/MobileSignal.js';
import DashHeader from '../Shared/DashHeader/DashHeader.js';
import img from './../Images/Img.png'
import img12 from './../Images/image 12.png'
import img14 from './../Images/image 14.png'
import img2 from './../Images/Promo Banner 2.png'
import img01 from './../Images/unsplash_Yep-psEeB9Y.png'
import './DashboardScreen.css'

const DashboardScreen = () => {
    return (
        <div>
            <MobileSignal></MobileSignal>
            <DashHeader></DashHeader>
            {/* profile section start */}
            <section className='profile'>
                <div className='d-flex mt-3 pt-3 px-3 justify-content-around '>
                    
                    <div className='col-6 d-flex align-middle'>
                        <div className='col-4' >
                             <img src={img} alt="" />
                        </div>
                        <div className='col-8'>
                            <p>wellcome back</p>
                            <h6 style={{margin:'-8px'}} className="">Vellysia Angel</h6>
                        </div>
                    </div>

                    <div className='col-6'>
                        <p>My total Balance</p>
                        <h5 style={{margin:'-8px'}} className='fw-bold'><span className='mx-3'>$</span> 4000</h5>
                    </div>                   
                </div>

                <div className='pt-4 ps-2 d-flex'>
                    <div className='col-1 mx-2'>
                        <div className=' bg-white p-1 rounded'>
                            <p >Add </p>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className='mt-3 p-1 bg-white rounded'>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>

                    <div style={{background:"#FD4E72",color:'white',textAlign:'left',borderRadius:'20px'}} 
                    className='col-7 p-3 mx-2'>
                        <p>#FE6786</p>
                        <h5 className='fw-bold'><span className='me-2'>$</span>4000</h5> 
                        <p className='custom'>Prestig Shantiniketan <span className='me-2'>DRL</span></p>
                    </div>

                    <div style={{background:"#FFC12B",color:'white',textAlign:'left',borderRadius:'20px'}} 
                    className='col-3 ps-2 ms-2'>
                        <p>#FE6786</p>
                        <h5 style={{marginBottom:'20px'}} className='fw-bold'><span className='me-1'>$</span>1500</h5>
                        <h6 className=''>Pheonix Mall</h6>
                    </div>
                </div>

                <div style={{justifyContent: ""}} className='iss d-flex'>
                    <div className='gameName mt-4 col-5 p-2 me-2 bg-white'>
                        <img src={img12} alt="" />
                        <p className='mt-2'>Money Games</p>
                    </div>
                    <div className='gameName2 mt-4 col-5 p-2 me-2'>
                        <img src={img14} alt="" />
                        <p className='mt-2'>Mega Games</p>
                    </div>
                </div>
            </section>

            {/* Game Section Start */}

            <section className='container mt-3'>
                <div className=''>
                    <div className='gameBox'>
                        <p className='date'>Apr <br /><span className='dataNumber '>09</span></p>

                    </div>
                    <div className='gameDes'>
                        <h5 style={{color:'black'}}><span style={{color:'#ED1C24'}}>AIRTEL</span> Money Games 1</h5>
                        <p style={{color:'#B0ADAD',marginTop:"15px"}}>Prestige Shantiniketan <span style={{color:'#91D0F7'}}>(Whitefield)</span></p>
                        <p style={{color:'#B0ADAD'}}>
                            <i className="me-1 fas fa-gift"></i> ₹ 3,50,000 
                            <span  className='mx-1 des2'> | </span>
                             <i className="me-1 fas fa-map-marker-alt"></i> Bangalore 
                             <span className='mx-1'> | </span>
                             <i className="me-2 fas fa-sun"></i> 3 Days</p>
                    </div>
                    <div className='container'>
                        <p className='mt-2' style={{color:'#91D0F7',textAlign:'left',fontSize:'14px'}}>Money Games happen every week. Play every week & EARN.</p>
                    </div>
                </div>
            </section>

            {/* Hm section */}
            <section className='profile mb-3'>
                 {/* H&M  */}
                 <div className='HM'>
                        <img style={{width:'96%'}} src={img2} alt="" />
                    </div>

                    {/* dashbord */}

                    <div className='bg-white '>
                        <div className=' col-3 px-5 pt-4 d-flex my-2'>
                            <div className='text-primary d-flex'>
                            <i className="mt-1 fas fa-house-user"></i><p className='ms-2 me-5'>Dashbord</p>
                            </div>
                            <div className='col-7 d-flex' style={{color:'black', fontSize:'20px'}}>
                            <i className="ms-3 far fa-copy"></i>
                            <i className="ms-3 far fa-user"></i>
                            <i className="ms-3 far fa-bell"></i>
                            <i className="ms-3 far fa-user"></i>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div className='container d-flex text-primary'>
                    <p className="ms-3">All Malls</p>
                    <p className="ms-3">Upcoming Malls</p>
                    <p className="ms-3"> Promising</p>
                    <p className="ms-3">Saved</p>
                </div>
                <div className='d-flex px-3'>
                    <div className='col-5  ms-2  container'>
                        <img src={img01} alt="" />
                        <p className='mt-3'>Forum Mall Koramangala</p>
                    </div>
                    <div className='col-5 ms-2 container'>
                        <img src={img01} alt="" />
                        <p className='mt-3'>Forum Mall Koramangala</p>
                    </div>
                </div>

                <div className='d-flex container'>
                    <div className='col-4 '>
                        <div className='Zara '></div>
                        <p className='mt-3'>Zara</p>
                    </div>
                    <div className='col-4'>
                        <div className='Zara1'></div>
                        <p className='mt-3'>Levis Jeans</p>
                    </div>
                    <div className='col-4 ms-3'>
                        <div className='Zara2 '></div>
                        <p className='mt-3'>Lifestyle</p>
                    </div>
                </div>

            </section>

            
        </div>
    );
};

export default DashboardScreen;