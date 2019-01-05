import React, { Component } from 'react';

class NavBar extends Component {
    
    state = {
        active: false
    };

    toggleClass() {
        console.log(this.state.active);
        let currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <nav>
                <ul className="nav-bar">
                    <li><a id="nav-item-1" className={this.state.active ? 'active': null} onClick={this.toggleClass} href="#news">Login</a></li>
                    <li><a id="nav-item-2" className={this.state.active ? 'active': null} onClick={this.toggleClass} href="#home">Sign up</a></li>
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