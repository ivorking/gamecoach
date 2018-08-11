import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class MainNav extends React.Component {

    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div>
        <Nav color="light" light expand="md">
        <NavbarBrand href="/">Coach</NavbarBrand>
        <Nav className="navlayout">
          <NavItem>
            <NavLink href="#">Find a Coach</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Update your games</NavLink>
          </NavItem>
        </Nav>
        </Nav>
      </div>
    );

  };
};


