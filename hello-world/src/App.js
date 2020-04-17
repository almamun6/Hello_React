import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import MyComponent from './components/Greet'
import {Greet} from './components/Greet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet/>
      </div>
    )
  }
}

export default App;
