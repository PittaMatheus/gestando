import React, { useState, useEffect} from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/auth';
import Axios from 'axios';

import Login from '../pages/Login';
import { ajaxUrl } from '../utils/config/ajaxPaths';
import Layout from '../components/Layout';

interface RoutesPropsData extends RouteProps {
  role?: string;
}

const AuthRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {

  const [permissions, setPermissions] = useState([] as string []);
  const { userLogged } = useAuth();
  
  useEffect(() => {
    async function loadRoles() {
      
      const res = await Axios.get(ajaxUrl.analysts.get)
      console.log(res.data)
      console.log("FIND ROLE")
      
      const findRole = (await res).data.find((r: string) => r ===role);
      console.log(findRole)

      // setPermissions(findRole)
    }

    loadRoles()
  },[])


  // Usuario logado com permissão
  // Usuario logado sem permissão
  // Usuario não logado

  if (!userLogged()) {
    return  <Route {...rest} path="/" component={Login}/>
  }

  if(!role && userLogged()){
    console.log("Usuario logado sem permissão")
    return <Route {...rest} />
  }

  return (
    // { hasPermission &&
    permissions ?
      <Switch>
        <Route {...rest} path="/" component={Login}/>
      </Switch> :
      <Redirect to="/" />
    // }
  );
};

export default AuthRoutes;
