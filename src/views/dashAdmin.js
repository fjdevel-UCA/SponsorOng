import React from "react";
import { Card } from "components/Card/Card.jsx";
import { Link } from "react-router-dom";

export default class DashAdmin extends React.Component {
  render() {
    return (
      <div className="content mt-5">
        <div className="container">
          <Card
            title="Administrar Usuarios"
            content={<Link to="/admin/users">Listar Usuarios</Link>}
          />
          <Card
            title="Administrar Ongs"
            content={<Link to="/">Listar Ong</Link>}
          />
          <Card
            title="Administrar Patrocinadores"
            content={<Link to="">Listar Patrocinadores</Link>}
          />
          <Card
            title="Administrar Incidencias"
            content={<Link to="">Listar Incidencias</Link>}
          />

        </div>
      </div>
    );
  }
}
