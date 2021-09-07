import React, { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from "./components/rotas"

import Layout from './components/Layout'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

function App() {
  // const [users, setUsers] = useState([]);
  // const url =
  //   process.env.NODE_ENV === "production"
  //     ? "/api"
  //     : "http://localhost:3001/api";

  // useEffect(() => {
  //   fetch(`${url}/users`)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(setUsers);
  // }, [url]);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
