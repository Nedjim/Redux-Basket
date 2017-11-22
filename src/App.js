import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <div className='title-header'>
            <h3>Redux Basket</h3>
          </div>
          {Navbar()}
        </header>
        {Products()}
      </div>
    );
  }
}

export default App;
