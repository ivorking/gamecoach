import React, { Component } from 'react';
import { NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
              <NavLink href="/FindCoach/">Find a Coach</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/GamesSelect/">Update gameslist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Accounts/">My account</NavLink>
            </NavItem>
          </Nav>
          </div>
        </Nav>
      </div>
    );

  };
};


