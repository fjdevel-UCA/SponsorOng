import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apibaseurl from "../variables/apiconfig";
import { Navbar } from "react-bootstrap";
import logo from "../assets/img/Logo.png";

import "./css/navbar.css";

export default class NavbarConf extends React.Component {
  state = {
    recursos: JSON.parse(localStorage.getItem("recursos"))
  };
  handleLogout = e => {
    axios.get(apibaseurl + "/security/logout");
    localStorage.clear();
    window.location = "/";
  };
  render() {
    if (this.state.recursos) {
      return (
        <div className="nav-altura">
          <Navbar  className="fondoRojo textoBlanco" fixed="top">
            <Navbar.Brand href="#home">
              <img
                alt="BeSponsor"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              Be Sponsor
            </Navbar.Brand>
            <ul className="nav justify-content-end">
              {this.state.recursos.map(nav => {
                return (
                  <li className="nav-item" key={nav.idrecurso}>
                    <NavItem item={nav} />
                  </li>
                );
              })}
              <li>
                <Link className="nav-link active" onClick={this.handleLogout} to="/">
                  Cerrar Sesion
                </Link>
              </li>
            </ul>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div >
          <Navbar fixed="top" className="fondoRojo textoBlanco nav-altura">
            <Navbar.Brand href="#home">
              <img
                alt="BeSponsor"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              Be Sponsor
            </Navbar.Brand>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Registrar ONG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Registrarse como patrocinador
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </Navbar>
        </div>
      );
    }
  }
}
class NavItem extends React.Component {
  render() {
    return (
      <Link className="nav-link active" to={this.props.item.uri}>
        {this.props.item.nombrerecurso}
      </Link>
    );
  }
}
