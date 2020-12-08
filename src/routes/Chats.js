import React, {useEffect, useState}from 'react';
import ChatList from '../components/ChatList';
import ImgsJSON from '../data/ImgsJSON.json';
import Nav from '../components/Nav';
import './Chats.css'
import axios from 'axios';

function Chats() {
    const chatimg = ImgsJSON;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const {data : chats} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }

    useEffect(getData,[]);
    return (
    <div id="chats_wrap">
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
                    <li>Chats<span><i className="fas fa-caret-down"></i></span></li>
                    <li></li>
                </ul>
            </div>
        </header>
        <div className="srch">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Find friends, chats, Plus Friends" />
        </div>
        <div className="friends">
            {chats.map((chat, idx)=>(
                <ChatList
                    id = {chat.id}
                    username = {chat.username}
                    name = {chat.name}
                    img = {chatimg[idx].img}
                    />
            ))}
        </div>
        <Nav/>
        <p className="kakao"><i className="far fa-comments"></i></p>
    </div>
    )
}

export default Chats
