import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import { Link } from "gatsby"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <div className="logo align-middle pr-2">
          <img src="https://i.pinimg.com/originals/1e/d8/50/1ed85028b1c54bdfbf7e0c7158aa6452.jpg" alt="" />
        </div>
        <NavbarBrand href="/">Pokédex Searcher</NavbarBrand>
        <Collapse isOpen={isOpen} navbar></Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
