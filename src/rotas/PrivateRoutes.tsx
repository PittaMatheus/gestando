import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { ajaxUrl } from "../utils/config/ajaxPaths";
import Axios from 'axios';


interface RoutesPropsData extends RouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
  const [permissions, setPermissions] = useState([] as string[]);

  useEffect(() => {
    async function loadRoles() {
      const response = await Axios.get(ajaxUrl.analysts.get)
      console.log(response)
      console.log("asdasd")

      const findRole = response.data.some((r: string) =>
        role?.split(",").includes(r)
      );
      setPermissions(findRole);
    }

    loadRoles();
  }, []);

  const { userLogged } = useAuth();

  if (!userLogged()) {
    return <Redirect to="/" />;
  }

  if (!role && userLogged()) {
    return <Route {...rest} />;
  }

  return permissions ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoutes;