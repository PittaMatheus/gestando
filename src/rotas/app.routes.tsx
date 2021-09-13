import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Users from '../pages/users'
import Cards from '../pages/Cards'
import Audit from '../pages/Audit'

import solicitations from '../pages/Solicitations'
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => (
  <Layout>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/users" exact component={Users} />
        <Route path="/solicitations" exact component={solicitations} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/audit" exact component={Audit} />

      </Switch>
  </Layout>
);

export default AppRoutes;