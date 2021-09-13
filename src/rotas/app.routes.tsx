import React from 'react'
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom'

import Home from '../pages/home'
import Users from '../pages/users'
import Cards from '../pages/Cards'
import Audit from '../pages/Audit'

import solicitations from '../pages/Solicitations'
import Layout from '../components/Layout';

import { useAuth } from '../hooks/auth';


// import { useAuth } from '../hooks/auth'

interface RoutesPropsData extends RouteProps {
  role?: string;
}

const AppRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/solicitations" exact component={solicitations} />
        <Route path="/cards" exact component={Cards} />
          <Route path="/audit" exact component={Audit} />
      </Switch>
    </Layout>
  );
};

export default AppRoutes;