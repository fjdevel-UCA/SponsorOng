import React from "react";
import NavbarConf from "components/NavbarConf";
import Footer from "components/Footer";
function Layout(props) {
  return (
    <React.Fragment>
      <NavbarConf/>
      {props.children}
      <Footer/>
    </React.Fragment>
    
  );
}

export default Layout;
