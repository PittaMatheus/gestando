import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider } from 'react-toast-notifications';

import { AuthProvider } from './hooks/auth';

ReactDOM.render(
  <ToastProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ToastProvider>,

  document.getElementById('root')
);

