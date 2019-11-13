import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from './Layout';
import Home from '../pages/Home';
import register from "./register";
import login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
        <Route path='/login' component={login} />
        <Route path='/register' component={register} />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
