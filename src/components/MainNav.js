import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Alert, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles/App.css';

export default class MainNav extends React.Component {

    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div>
        <Nav>
          <NavbarBrand href="/">Home</NavbarBrand>
          <div className = "ml-auto">
          <Nav>
            <NavItem>
              <NavLink href="#">Find a Coach</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Update gameslist</NavLink>
            </NavItem>
          </Nav>
          </div>
        </Nav>
      </div>
    );

  };
};


