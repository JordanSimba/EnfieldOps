import React, { Component } from 'react';
import '../App.css'
import slide from '../images/todo-bg.jpg'

class NavBar extends Component {
    
    render() {
        return (
            <div id="slide-container">
                <img id="logo" src={slide} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default NavBar;