import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <h1>Redux Basket</h1>
          <Navbar />
        </header>

        <body>
        </body>
      </div>
    );
  }
}

export default App;
