import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from './Layout';
import Home from '../pages/Home';
import register from "./register";
import login from "./login";
import login_donante from "./login_donante";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
        <Route path='/login' component={login} />
        <Route path='/register' component={register} />
        <Route path='/login_donante' component={login_donante} />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
