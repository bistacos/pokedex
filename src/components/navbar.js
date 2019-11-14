import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

import { Location } from '@reach/router'

const NavBar = (props, location) => {
  console.log('this one locatin: ', location);
  return (
    <div>
      <Location>
        {({ location }) => {
          console.log('location now: ', location.pathname);
          return (
            <Navbar color="dark" light expand="md">
              <div className={`logo align-middle pr-2 ${location.pathname === '/' ? 'underline text-white font-weight-bold' : ''}`}>
                <img src="https://i.pinimg.com/originals/1e/d8/50/1ed85028b1c54bdfbf7e0c7158aa6452.jpg" alt="" />
              </div>
              <NavbarBrand href="/">Pokédex Searcher</NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem className={`mr-auto ${location.pathname === '/search/' ? 'underline text-white font-weight-bold' : ''}`}>
                    <NavLink href="/search/">Search</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/bistacos/pokedex">GitHub</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          )
        }}
      </Location>
    </div>
  );
}

export default NavBar;
