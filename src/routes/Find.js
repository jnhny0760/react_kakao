import React from 'react'
import Nav from '../components/Nav';
import './Find.css'

function Find() {
    return (
    <div id="find_wrap">
        <header>
            <div className="header_top">
                <div className="bar1">
                    <ul>
                        <li><i className="fas fa-plane"></i></li>
                        <li><i className="fas fa-wifi"></i></li>
                    </ul>
                </div>
                <div className="bar2">
                    <ul>
                        <li>오후 3:27</li>
                    </ul>
                </div>
                <div className="bar3">
                    <ul>
                        <li><i className="far fa-moon"></i></li>
                        <li><i className="fab fa-bluetooth-b"></i></li>
                        <li>80%</li>
                        <li><i className="fas fa-battery-three-quarters"></i></li>
                    </ul>
                </div>
            </div>
            <div className="header_bottom">
                <ul>
                    <li>Edit</li>
                    <li>Find</li>
                    <li></li>
                </ul>
            </div>
        </header>
        <div className="top_banner">
            <ul>
                <li><i className="fas fa-address-book"></i></li>
                <li>Find</li>
            </ul>
            <ul>
                <li><i className="fas fa-qrcode"></i></li>
                <li>QR Code</li>
            </ul>
            <ul>
                <li><i className="fas fa-mobile-alt"></i></li>
                <li>Shake</li>
            </ul>
            <ul>
                <li><i className="far fa-envelope"></i></li>
                <li>Invite via SMS</li>
            </ul>
        </div>
        <div className="main">
            <ul>
                <li>Recommended Friends</li>
                <li>You have recommended friends.</li>
            </ul>
        </div>
        <Nav/>
    </div>
    )
}

export default Find
