import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import apibaseurl from "../variables/apiconfig";
export default class DashAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    };
    this.obtenerUsuario();
  }

  obtenerUsuario = () => {
    axios.get(apibaseurl + "/admin/users/all").then(res => {
      this.setState({
        usuarios: JSON.parse(JSON.stringify(res.data))
      });
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h3>Listado de usuarios registrados</h3>
            <div className="mt-1">
            <Table striped hover responsive>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Tipo usuario</th>
              <th>telefono</th>
              <th>Documento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map(user => {
              return (
                <tr key={user.idusuario}>
                  <td>{user.nombreusuario}</td>
                  <td>{user.nombrepersona}</td>
                  <td>{user.correopersona}</td>
                  <td>{user.idtipousuario}</td>
                  <td>{user.telefonopersona}</td>
                  <td>{user.numerodocumento}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
     
            </div>
          </div>
        </div>
      </div>
    );
  }
}
