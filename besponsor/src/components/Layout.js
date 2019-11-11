import React from 'react';
import NavbarGlobal from '../components/NavbarGlobal';
import Navbar from '../components/Navbar';
function Layout(props) {
  
    return (
      <React.Fragment>
        <NavbarGlobal/>
        <Navbar/>
        {props.children}
      </React.Fragment>
    );
  }
export default Layout;