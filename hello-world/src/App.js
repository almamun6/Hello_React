import React, { Component } from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FragmentDemo />

        {/* this table used to give a bit extended example */}
        <Table />
      </div>
    )
  }
}

export default App;
