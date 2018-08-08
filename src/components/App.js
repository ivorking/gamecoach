import React, { Component } from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Board Games Coach</h1>
        </header>
        <p className="App-intro">
          React implementation of a Board Games Coach web app.
        </p>
      </div>
    );
  }
}

export default App;
