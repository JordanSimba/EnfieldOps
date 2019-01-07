import React, { Component } from 'react';
import '../App.css'
import logo from '../alien-logo.jpg'

class NavBar extends Component {
    
    render() {
        return (
            <nav id="nav-container">
                <img id="logo" src={logo} className="App-logo" alt="logo" />
                <ul className="nav-bar">
                    <li><a id="nav-item-1" href="#signUp">Sign up</a></li>
                    <li><a id="nav-item-2" href="#login">Login</a></li>
                </ul>
            </nav>
        );
    }
    
    // setActive = (e) => {
    //     console.log(e.target.id);
    //     console.log("I'm inside the function!");
    // }

}

export default NavBar;