import React from "react";
import { Card } from "components/Card/Card.jsx";
import { Link } from "react-router-dom";

export default class DashAdmin extends React.Component {
  render() {
    return (
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Card
                title="Administrar Usuarios"
                content={<Link to="/admin/users">Listar Usuarios</Link>}
              />
            </div>
            <div className="col-md-6">
              <Card
                title="Administrar Ongs"
                content={
                <div>
                  <Link to="/">Listar Ong</Link><br/>
                  <Link to="/registro/ong">Registrar Ong</Link>
                </div>
              }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card
                title="Administrar Patrocinadores"
                content={<Link to="">Listar Patrocinadores</Link>}
              />
            </div>
            <div className="col-md-6">
              <Card
                title="Administrar Incidencias"
                content={<Link to="">Listar Incidencias</Link>}
              />
            </div>
          </div>  
        </div>
      </div>
    );
  }
}
