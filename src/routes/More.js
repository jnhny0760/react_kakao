import React from 'react';
import Nav from '../components/Nav';
import PlusFriends from '../components/PlusFriend';
import profile from '../data/MembersJSON.json';
import friends from '../data/Plus.json'
import './More.css';

function More() {
    const myprofile = profile[0];
    const plus = friends[0];
    return (
    <div id="more_wrap">
        <header className="header">
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
                    <li></li>
                    <li>More</li>
                    <li><i className="fas fa-cog"></i></li>
                </ul>
            </div>
        </header>
        <header className="user_header">
            <div className="user">
                <img src={myprofile.profileimg} alt="" />
                <div className="user_content">
                    <h3>{myprofile.name}</h3>
                    <span>{myprofile.mail}</span>
                </div>
            </div>
        </header>
        <div className="list">
            <ul>
                <li><i className="far fa-smile"></i></li>
                <li>Emoticons</li>
            </ul>
            <ul>
                <li><i className="fas fa-paint-brush"></i></li>
                <li>Themes</li>
            </ul>
            <ul>
                <li><i className="far fa-hand-peace"></i></li>
                <li>Plus Friends</li>
            </ul>
            <ul>
                <li><i className="far fa-user-circle"></i></li>
                <li>Account</li>
            </ul>
        </div>
        <div className="plus">
            <ul>
                <li>Plus Friends</li>
                <li><i className="fas fa-info-circle"></i>&nbsp; Learn More</li>
            </ul>
            <div className="plus_friend">
                {friends.map(friend => (
                <PlusFriends
                    id = {friend.id}
                    icon = {friend.icon}
                    title = {friend.title}
                    />
                ))}
            </div>
        </div>
        <div className="family">
            <ul>
                <li><img src="images/kakaostory.png" alt="kakao story" /></li>
                <li>Kakao Story</li>
            </ul>
            <ul>
                <li><img src="images/path.png" alt="path" /></li>
                <li>Path</li>
            </ul>
            <ul>
                <li><img src="images/kakaofriends.png" alt="kakao friends" /></li>
                <li>Kakao Friends</li>
            </ul>
        </div>
        <Nav/>
    </div>
    )
}

export default More
