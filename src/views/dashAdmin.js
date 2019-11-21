import React from "react";
import {Card} from 'components/Card/Card.jsx';
import { Link } from "react-router-dom";

export default class DashAdmin extends React.Component {
  render() {
    return (
      <div className="content mt-5">
        <div className="container">
        <Card
            title="Usuarios"
            content={
                <Link to="/admin/users">
                    Administrar Usuarios
                </Link>
            }/>
        </div>
      </div>
    );
  }
}
