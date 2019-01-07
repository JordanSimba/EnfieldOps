import React, { Component } from 'react';
import '../App.css'
import slide from '../images/todo-bg.jpg'

class ImageSlide extends Component {
    //Working on Carousel first. Then this component, then work on the arrows.
    render() {
        return (
            <div id="slide-container">
                <img id="logo" src={slide} alt="logo" />
            </div>
        );
    }
}

export default ImageSlide;