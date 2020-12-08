import React from 'react';
import {Link} from 'react-router-dom';
import MembersJSON from '../components/MembersJSON'
import profile from '../data/MembersJSON.json'
import Nav from '../components/Nav';
import './Friends.css';

function Friends() {

    const myprofile = profile[0];
    return (
        <div id="Friends_wrap">
    <header>
        <div className="Friends_header_top">
            <div className="Friends_bar1">
                <ul>
                    <li><i className="fas fa-plane"></i></li>
                    <li><i className="fas fa-wifi"></i></li>
                </ul>
            </div>
            <div className="Friends_bar2">
                <ul>
                    <li>오후 3:27</li>
                </ul>
            </div>
            <div className="Friends_bar3">
                <ul>
                    <li><i className="far fa-moon"></i></li>
                    <li><i className="fab fa-bluetooth-b"></i></li>
                    <li>80%</li>
                    <li><i className="fas fa-battery-three-quarters"></i></li>
                </ul>
            </div>
        </div>
        <div className="Friends_header_bottom">
            <ul>
                <li>Manage</li>
                <li>Friends<span>1</span></li>
                <li><i className="fas fa-cog"></i></li>
            </ul>
        </div>
    </header>
    <div className="Friends_srch">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Find friends, chats, Plus Friends" />
    </div>
    <hr/>
    <p className="Friends_head">My Profile</p>
    <hr/>
    <div className="Friends_me">
        <MembersJSON
            id = {myprofile.id}
            name = {myprofile.name}
            email = {myprofile.mail}
            img = {myprofile.profileimg}
            text = {myprofile.chat}
            bg = {myprofile.backgroundimg}
        />
    </div>
    <hr/>
    <p className="Friends_head">Friends</p>
    <hr/>
    <div className="Friends">
        {profile.map(profile => {
            if(profile.id !=1){return(
                <MembersJSON
                id = {profile.id}
                name = {profile.name}
                mail = {profile.mail}
                img = {profile.profileimg}
                text = {profile.chat}
                bg = {profile.background}
                />
            )}})}
    </div>
    <Nav/>
</div>
    )
}

export default Friends
