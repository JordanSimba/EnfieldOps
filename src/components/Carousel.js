import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSlide from './ImageSlide';

class Carousel extends Component {
    
    render() {
        return (
            <div id="carousel">
                <div id="arrow-left">
                    <FontAwesomeIcon icon="angle-double-left" size="4x"  />
                </div>
                <ImageSlide/>
                <div id="arrow-right">
                    <FontAwesomeIcon icon="angle-double-right" size="4x"  />
                </div>
            </div>
        );
    }
}

export default Carousel;