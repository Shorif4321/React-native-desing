import React from 'react';
import MobileSignal from '../Home/Home/MobileSignal/MobileSignal.js';
import GameHeader from '../Shared/GameHeader/GameHeader.js';
import './GameView.css'
import car from './../Images/Rectangle 202.png'
import Group from './../Images/Group 10597.png'
import kia from './../Images/path2996.png'
import img15 from './../Images/image 15.png'
import bannar from './../Images/Banner.png'


const GameView = () => (
    <div>
        {/* ==== Mobile Signal for all pages==== */}
        <MobileSignal></MobileSignal>

        {/* ====import Game Header From Shared components */}
        <GameHeader></GameHeader>

        {/*====== play section===== */}
        <section style={{ justifyContent: 'space-around' }} className='profile d-flex p-3 '>
            <h6 className='PlayGame'>I Wanna Play the Game</h6>
            <i className="playIcon far fa-bookmark"></i>
            <i className="playIcon fas fa-share-alt"></i>
        </section>

        {/* =======car section======= */}
        <section className='profile '>
            <div className='col-12 container car px-4 '>
                <img src={car} alt="" />
            </div>
            {/* =======car section end ======= */}

            {/* =======car description start ======= */}
            <div className='container px-4'>
                <div className='bg-white pt-2 '>
                    <img className='sliderButton' src={Group} alt="" />
                    <div className='p-3'>
                        <h4 style={{ color: '#A1A1A1', textAlign: 'left' }}><span style={{ color: '#092C4C', fontWeight: "bold" }}>KIA Game Carnival -</span> Fill in the Car & Win</h4>
                        <div className='my-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <i className="text-primary mt-1 me-2 fas fa-rupee-sign"></i>
                                <p style={{ color: '#092C4C' }}>83,465</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <i className="mt-1 me-2 fas fa-rupee-sign" style={{ color: '#FBA089' }}></i>
                                <p style={{ color: '#092C4C' }}>Sponsor</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <img src={kia} alt="" />
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <i className="mt-1 me-2 fas fa-sim-card" style={{ color: '#E34614' }}></i>
                            <p style={{ color: '#092C4C' }}><span style={{ color: '#E34614' }}>Redeem At :</span> Pheonix Marketcity</p>
                        </div>

                        <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <i className="mt-1 me-2 fas fa-calendar-alt" style={{ color: '#FBA089' }}></i>
                                <p style={{ color: '#092C4C' }}>start</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <i className="mt-1 me-2 fas fa-calendar-alt" style={{ color: '#FBA089' }}></i>
                                <p style={{ color: '#092C4C' }}>end</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <i className="mt-1 me-2 fas fa-search-location" style={{ color: '#FBA089' }}></i>
                                <p style={{ color: '#092C4C' }}>Vouchers</p>
                            </div>
                        </div>
                        {/* ====August date==== */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ color: '#092C4C' }}>14 August</h4>
                            <h4 style={{ color: '#092C4C' }}>16 August</h4>
                            <h4 style={{ color: '#092C4C' }}>832 Nos</h4>

                        </div>
                        <p style={{ color: '#EF8C9D', textAlign: 'justify' }}>KIA Motors brings to you a game in their style. This Carnival, will give you a chance to fit in as many number of cubes as you can. Fill in the Car and win Cash Vouchers with NO conditions applied.</p>
                        <span className='playTOp'></span>
                        {/* =======car description end ======= */}


                        {/* =======Play at start ======= */}
                        <div className='mt-3' style={{ display: 'flex', fontWeight: "bold" }}>
                            <i className="mt-1 me-2 fas fa-map-marked-alt text-primary"></i>
                            <p className='text-primary'><span style={{ color: '#E34614' }}>Play At :</span> Pheonix Marketcity</p>
                        </div>

                        {/* =======Dashbord with Icon start ======= */}
                        <div className='bg-white '>
                            <div className='d-flex my-2'>
                                <div className='text-primary d-flex'>
                                    <i className="mt-1 fas fa-house-user"></i><p className='ms-2 me-5'>Dashbord</p>
                                </div>
                                <div className='col-7 d-flex' style={{ color: 'black', fontSize: '20px' }}>
                                    <i className="ms-3 far fa-copy"></i>
                                    <i className="ms-3 far fa-user"></i>
                                    <i className="ms-3 far fa-bell"></i>
                                    <i className="ms-3 far fa-user"></i>
                                </div>
                            </div>

                            {/* =======Time section start ======= */}
                            <div className='px-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <i className="mt-1 me-2 fas fa-calendar-alt" style={{ color: '#FBA089' }}></i>
                                    <p style={{ color: '#092C4C' }}>Day</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <i className="mt-1 me-2 far fa-clokc" style={{ color: '#FBA089' }}></i>
                                    <i class="far fa-clokc"></i>
                                    <p style={{ color: '#092C4C' }}>Time Slot</p>
                                </div>
                            </div>

                            <div className='px-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4 style={{ color: '#092C4C' }}>14 August</h4><i className="mt-2 fas fa-chevron-down" style={{ color: '#FBA089' }}></i>
                                <h4 style={{ color: '#092C4C' }}>16 August</h4><i className="mt-2 fas fa-chevron-down" style={{ color: '#FBA089' }}></i>
                            </div>

                            {/* =======Remaind me section start ======= */}
                            <div className='mt-3 px-2' style={{ display: 'flex', fontWeight: "bold" }}>
                                <p style={{ color: '#458F5A', background: '#ECF5EE', fontSize: '14px' }} className='px-2 py-1 rounded'> <span className='first'></span>Remind me 1 Day before Game Day</p>
                            </div>

                            <div className='px-2' style={{ display: 'flex', fontWeight: "bold" }}>
                                <p style={{ color: '#458F5A', background: '#EEECF5', fontSize: '14px' }} className='px-2 py-1 rounded'> <span className='first1'></span>Remind me 3 Day before Game Day</p>
                            </div>
                            <div className='px-2' style={{ display: 'flex', fontWeight: "bold" }}>
                                <p style={{ color: '#458F5A', background: '#F5ECEC', fontSize: '14px' }} className='px-2 py-1 rounded'> <span className='first2'></span>Remind me 3 Day before Game Day</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ====== Carnival section====== */}
            <div className='mt-4 p-4'>
                <img className='img-fluid' style={{}} src={img15} alt="" />
            </div>

            {/* ====== Last section start====== */}
            <div className='px-4 pt-3' style={{ display: 'flex', }}>
                <h4 style={{ color: '#1F2933' }}>Recent Store Launches</h4>
                <h6 style={{ color: '#6B7580', paddingLeft: '25px' }}>View All</h6>
            </div>

            <div className='col-9 p-3 px-3 rounded'>
                <div className='p-2 bg-white rounded'>
                    <img className='img-fluid' src={bannar} alt="" />
                    <div className='p-3' style={{ textAlign: 'left' }}>
                        <h6>Miniso Stores</h6>
                        <p style={{ textAlign: 'justify' }}>Now Buy MINISO products in your Local Mall at Jayanagar.</p>
                    </div>
                </div>
            </div>
            <div className='pt-5 col-12'></div>

        </section>
    </div>
);

export default GameView;