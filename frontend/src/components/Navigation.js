import React, { Component } from 'react';

import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
        <Nav>
            <NavbarBrand href="/">Dog Parks</NavbarBrand>
            <NavItem>
                <NavLink href="parks">Parks</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/submit">Submit</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="/contact">Contact</NavLink>
            </NavItem>
        </Nav>
    );
  }
}

export default Navigation;
