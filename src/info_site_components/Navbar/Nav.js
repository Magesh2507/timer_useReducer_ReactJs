import React from 'react'
import logo from '../logo/logo.png'
import './Nav.css'


const Nav = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Nav