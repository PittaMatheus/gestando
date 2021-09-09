import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Users from '../pages/users'
import Cards from '../pages/Cards'
import solicitations from '../pages/Solicitations'
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => (
  <Layout>
    <BrowserRouter >
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/solicitations" exact component={solicitations} />
        <Route path="/list/:type" exact component={Cards} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default AppRoutes;