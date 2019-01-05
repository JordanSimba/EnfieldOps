import React, { Component } from 'react';

class NavBar extends Component {
    
    render() {
        return (
            // This react fragment is a psuedo tag which can be used in place of divs if we a div is not necessary.
            <React.Fragment>
                <ul className="nav-bar">
                    <li><a id="nav-item-1" onClick={this.setActive} href="#news">News</a></li>
                    <li><a id="nav-item-2" onClick={this.setActive} href="#home">Home</a></li>
                    <li><a id="nav-item-3" onClick={this.setActive} href="#contact">Contact</a></li>
                    <li><a id="nav-item-4" onClick={this.setActive} href="#about">About</a></li>
                </ul>
            </React.Fragment>
        );
    }

    setActive = (e) => {
        let id = e.target.id;
        console.log(id);

        let currentAttr = document.getElementById(id).getAttribute("className");
        console.log(currentAttr);

        document.getElementById(id).setAttribute("className", "active");
        console.log(currentAttr);

    }
    // setActive = (e) => {
    //     console.log(e.target.id);
    //     console.log("I'm inside the function!");
    // }

}

export default NavBar;