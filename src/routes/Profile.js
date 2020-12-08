import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Profile.css'

function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if (location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, mail, img ,bg} = location.state;

    return (
    <div id="profile_wrap">
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
            <div className="main_top">
                <ul>
                    <li><Link to="/"><i className="fas fa-times"></i></Link></li>
                    <li><i className="fas fa-user"></i></li>
                </ul>
            </div>
        </header>
        <div className="profile_main">
            <header className="profile_bg" style={{background: "url("+bg+") no-repeat 50% 50%" , backgroundSize: "cover"}}>
                <div>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            </header>
            <div className="container">
                <input type="text" placeholder={mail} />
                <div className="bottom">
                <ul>
                    <li><i className="far fa-comments"></i></li>
                    <li>My Chatroom</li>
                </ul>
                <ul>
                    <li><i className="fas fa-pencil-alt"></i></li>
                    <li>Edit Profile</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    )
}else return null;
}

export default Profile
