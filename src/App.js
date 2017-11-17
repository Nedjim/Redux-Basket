import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Redux Basket</h1>
          {Navbar()}
        </header>
      </div>
    );
  }
}

export default App;
