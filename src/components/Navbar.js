import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apibaseurl from "../variables/apiconfig";
export default class Navbar extends React.Component {
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
        <nav>
          {this.state.recursos.map(nav => {
            return (
              <li key={nav.id}>
                <NavItem item={nav} />
              </li>
            );
          })}
          <li>
            <Link className="btn" onClick={this.handleLogout}>
              Cerrar Sesion
            </Link>
          </li>
        </nav>
      );
    }else{
        return (
            <nav>
                <Link className="btn" to="/login">
              iniciar sesion
            </Link>
                </nav>)
    }
  }
}
class NavItem extends React.Component {
  render() {
    return (
      <div>
        <Link className="" to={this.props.item.uri}>
          {this.props.item.nombrerecurso}
        </Link>
      </div>
    );
  }
}
