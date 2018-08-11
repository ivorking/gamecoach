import React, { Component } from 'react';
import './styles/App.css';
import MainNav from '../components/MainNav';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavDropdown,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron,
//   Button
// } from 'react-bootstrap';

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
      <div>
        <MainNav />
        <header className="App-header">
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
