import React from 'react';
import NavbarGlobal from '../components/NavbarGlobal';
import Navbar from '../components/Navbar';
import register from "../components/register";

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