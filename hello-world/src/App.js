import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counters from './components/Counters';


class App extends Component {
  render() {
    return (
      <div className="App">
        <User render={(isLoggedIn) => isLoggedIn ? 'React' : 'Angular'} />

        <Counters>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counters>

        <Counters>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counters>

      </div>
    )
  }
}

export default App;
