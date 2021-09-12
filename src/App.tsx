import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from "./rotas"
import { ToastProvider } from 'react-toast-notifications';


import dark from './styles/themes/dark'
import light from './styles/themes/light'

const App: React.FC = () => {
  return (
    <ToastProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
