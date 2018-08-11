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

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const navInstance = () => (
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">
      NavItem 1 content
    </NavItem>
    <NavItem eventKey={2} title="Item">
      NavItem 2 content
    </NavItem>
    <NavItem eventKey={3} disabled>
      NavItem 3 content
    </NavItem>
    Mubbins
  </Nav>
);

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
      <navInstance />
      <p className="App-intro">
        React implementation of a Board Games Coach web app.
        </p>
    </div>
  );
}
}

export default App;
