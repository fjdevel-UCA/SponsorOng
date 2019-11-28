import React from "react";
import axios from "axios";

import apibaseurl from "../variables/apiconfig";

class LoginForm extends React.Component {
  constructor () {
    super();
    this.state = {
      auth: false
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(apibaseurl + "/security/login", {
        username: this.props.formValues.username,
        password: this.props.formValues.password
      })
      .then(res => {
        localStorage.setItem('logged',true)
        let uris=[];
        
        res.data.recursos.forEach(va=>{
          uris.push(va)
        })
        localStorage.setItem('recursos',JSON.stringify(uris))
        window.location = '/'
      })
      .catch(err => {
        if(err.response){
          switch (err.response.status) {
            case 400:
              this.props.alertHandler("show alert-danger",err.response.data)
              break;
            case 401:
                this.props.alertHandler("show alert-danger",err.response.data)
              break;
            default:
                this.props.alertHandler("show alert-danger","Existe un error al conectarse con el servidor")
              break;
          }
        }
      });

  };
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Ingrese su usuario</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={this.props.onChange}
            value={this.props.formValues.username}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingrese contraseña</label>
          <input
            type="password"
            onChange={this.props.onChange}
            className="form-control"
            name="password"
            value={this.props.formValues.password}
            required
          />
        </div>
        <button onClick={this.handleClick} className="btn btn-primary">
          Iniciar Sesion
        </button>
      </form>
    );
  }
}
export default LoginForm;
