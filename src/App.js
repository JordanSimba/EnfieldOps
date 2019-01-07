import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Carousel/>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
