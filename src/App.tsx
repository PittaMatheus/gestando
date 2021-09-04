import React, { useEffect, useState } from "react";
import GlobalStyles from './styles/GlobalStyles';
import Routes from "./components/rotas"

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
    // <div className="App">
    //   <header className="App-header">
    <>
      <GlobalStyles />
        <h1>Ola mundo</h1>
        <Routes />
    </>
    //   </header>
    // </div>
  );
}

export default App;
