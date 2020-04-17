import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="foo" age="25" />
        <Greet name="moo" age="28" />
        <Greet name="too" age="27" />
        <Greet name="foo" age="25" />

        <Welcome name="foo" age="25" />
        <Welcome name="moo" age="28" />
        <Welcome name="too" age="27" />
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App;
