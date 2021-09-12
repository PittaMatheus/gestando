import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthProvider } from './hooks/auth';

ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  document.getElementById('root')
);

