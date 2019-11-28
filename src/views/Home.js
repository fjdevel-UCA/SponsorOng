import React from "react";
import "./CSS/home.css";
import logo from "../assets/img/Logo.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="lol">
      <div className="content">
          <img
                alt="BeSponsor"
                src={logo}
                width="150"
                height="150"
                className="d-inline-block align-top"
              />
          <h1>Be Sponsor</h1>              
          <p>Se parte del cambio</p> 
      </div>
      <div className="sliding-background"></div> 
  </div>
    );
  }
}
