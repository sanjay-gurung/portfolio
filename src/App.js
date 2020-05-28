import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
