import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'


class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter/> */}
        {/* <Message /> */}
        {/* <Greet name="foo" age="25">
          <p>This is children property</p>
        </Greet>
        <Greet name="moo" age="28">
          <button>Action</button>
        </Greet>
        <Greet name="too" age="27" />

        <Welcome name="foo" age="25" />
        <Welcome name="moo" age="28" />
        <Welcome name="too" age="27" /> */}
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App;
