import React from 'react';
import styled from 'styled-components';
import Navbar from '../Header/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';

const Main = styled.main`
  margin-top: 60px;
`;

const Footer = styled.footer`
  background: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <div className="container">
          <p>© 2024 Penang Tourism. All rights reserved.</p>
        </div>
      </Footer>
    </>
  );
};

export default Layout; 