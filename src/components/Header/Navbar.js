import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #f0a500;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItems>
        <NavLink to="/">Penang Tourism</NavLink>
        <NavLinks>
          <NavLink to="/spots">Attractions</NavLink>
          <NavLink to="/food">Food</NavLink>
          <NavLink to="/hotels">Hotels</NavLink>
          <NavLink to="/culture">Culture</NavLink>
        </NavLinks>
      </NavItems>
    </Nav>
  );
};

export default Navbar; 