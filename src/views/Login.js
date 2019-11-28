import React from "react";

import { Card } from "components/Card/Card.jsx";
import LoginForm from "components/LoginForm";
import Notificacion from "components/notificacion";

import "./CSS/login.css";

class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: ""
    },
    notificacion: {
      clases: "",
      mensaje: ""
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleAlert = (tipo, msj) => {
    this.setState({
      notificacion: {
        clases: tipo,
        mensaje: msj
      }
    });
  };
  render() {
    if (localStorage.getItem("logged")) window.location = "/";
    else {
      return (
        <div>
          <div className="content mt-5">
            <div className="container">
              <Notificacion
                clases={this.state.notificacion.clases}
                mensaje={this.state.notificacion.mensaje}
              />
              <div className="row justify-content-md-center">
                <div className="col-md-6">
                  <Card
                    title="Iniciar Sesión"
                    content={
                      <LoginForm
                        onChange={this.handleChange}
                        formValues={this.state.form}
                        alertHandler={this.handleAlert}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="full-page-background-color" />
        </div>
      );
    }
  }
}
export default Login;
