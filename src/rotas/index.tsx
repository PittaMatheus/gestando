
// import { Route, Switch } from "react-router-dom";
// import Home from "../pages/home";
// import List from "../pages/List";
// import Product from "../pages/Product";
// import PrivateRoutes from "./PrivateRoutes";

import React from 'react'
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom'

import Home from '../pages/home'
import Login from "../pages/Login";
import Users from '../pages/users'
import Cards from '../pages/Cards'
import Audit from '../pages/Audit'
import PrivateRoutes from './PrivateRoutes'


import solicitations from '../pages/Solicitations'
import Layout from '../components/Layout';

const Routes = () => {
  return (
    
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoutes path="/users" exact component={Users} />
          <PrivateRoutes path="/solicitations" exact component={solicitations} />
          <PrivateRoutes path="/cards" exact component={Cards} role="ROLE_ADMIN,ROLE_USER" />
          <PrivateRoutes path="/audit" exact component={Audit} role="ROLE_ADMIN" />
        </Switch>
      </BrowserRouter>
      </Layout>

  );
};

export default Routes;


