import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../../pages/home'

const AppRoutes: React.FC = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/home" exact component={Home} />
    </Switch>
  </BrowserRouter>

);

export default AppRoutes;