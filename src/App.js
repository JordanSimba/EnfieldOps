import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import './App.css'
import './fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
