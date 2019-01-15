import React, { Component } from 'react';
import Footer from './components/Footer';
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
        <Footer/>
      </div>
    );
  }
}

export default App;
