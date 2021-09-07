import React, { Children, useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from "./components/rotas"

import Home from "./pages/home";
import List from "./pages/List";

import Layout from './components/Layout'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
