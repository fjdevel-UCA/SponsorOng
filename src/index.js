import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Layout from "layouts/Layout";
//importacion de paginas
import Login from "./views/Login";
import Home from "./views/Home";
import DashAdmin from "./views/dashAdmin";
import Error404 from "./views/Error404";
import ListarUsuarios from "./views/ListarUsuarios";


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashAdmin" component={DashAdmin}/>
        <Route exact path="/admin/users" component={ListarUsuarios}/>
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
