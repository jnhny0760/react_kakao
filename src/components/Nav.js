import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 
import './Nav.css'

function Nav() {
    return (
        <nav class="bottom_banner">
            <NavLink to="/" exact activeClassName="active">
            <i class="fas fa-user"></i>
            <span>Friends</span>
            </NavLink>
            <NavLink to="/Chats" exact activeClassName="active">
            <i class="far fa-comments"></i>
            <span>Chats</span>
            </NavLink>
            <NavLink to="/Find" exact activeClassName="active">
            <i class="fas fa-search"></i>
            <span>Find</span>
            </NavLink>
            <NavLink to="/More" exact activeClassName="active">
            <i class="fas fa-ellipsis-h"></i>
            <span>More</span>
            </NavLink>
        </nav>
    )
}

export default Nav
