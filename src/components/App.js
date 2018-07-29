import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Board Game Sherpa</h1>
        </header>
        <p className="App-intro">
          React implementation.
        </p>
      </div>
    );
  }
}

export default App;
