import React, { Component } from 'react';
import '../App.css';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';

class Carousel extends Component {
    
    render() {
        return (
            <div id="carousel">
                <Arrow/>
                <ImageSlide/>
                <Arrow/>
            </div>
        );
    }
}

export default Carousel;