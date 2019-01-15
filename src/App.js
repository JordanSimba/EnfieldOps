import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
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
