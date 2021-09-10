import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth'

const Routes: React.FC = () => {
  const { logged } = useAuth();
  console.log(logged)
  return (
    <BrowserRouter >
      { logged ? <AppRoutes /> : <AuthRoutes />}

    </BrowserRouter>
  )
}
export default Routes;