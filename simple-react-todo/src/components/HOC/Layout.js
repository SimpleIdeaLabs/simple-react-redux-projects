import React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { Container } from 'reactstrap';
  
const Layout = (props) => {
  return (
    <div>
      <AppNavbar />
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default Layout;