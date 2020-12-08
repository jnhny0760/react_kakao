import React, {useEffect, useState}from 'react';
import {Link} from 'react-router-dom';
import './Chat.css';

function Chat(props) {
    const {location, history} = props;
    const redirect = () => {
        if (location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if (location.state){
        const {id, img, username} = location.state;

    return (
    <div id="chat_wrap">
        <header className="chat">
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
                    <li><Link to="/Chats"><i className="fas fa-chevron-left"></i></Link></li>
                    <li>Friend Name</li>
                    <li><i className="fas fa-search"></i>&nbsp;<i className="fas fa-bars"></i></li>
                </ul>
            </div>
        </header>
        <hr/>
        <div className="main_chat">
            <p className="day">tuesday, November 03, 2020</p>
            <div className="me">
                <span>This is a test message</span>
                <span>Anybody do the things you doing before</span>
                <span>There is a song that inside of my souls</span>
            </div>
            <p>6:35pm</p>
            <div className="you">
                <div className="you_wrap">
                    <img src={img} alt="" />
                    <h3>{username}</h3>
                </div>
                <div className="text_wrap">
                <span>This is an answer</span>
                <span>dance for me dance for me dance for me</span>
                <span>it is the one thst I've try to write over and over again</span>
                </div>
            </div>
            <p className="right">8:06pm</p>
        </div>
        <div className="chat_area">
            <ul>
                <li><i className="fas fa-plus"></i></li>
                <input type="text" />
                <li><i className="far fa-smile"></i></li>
                <li><i className="fas fa-microphone"></i></li>
            </ul>
        </div>
    </div>
    )
}else return null
}

export default Chat
