import React, { createContext, useState, useContext, useCallback } from 'react';
import { ajaxUrl } from "../utils/config/ajaxPaths";
import Axios from 'axios';
import { useToasts } from 'react-toast-notifications';

interface IauthContext {
  logged: boolean;
  userAuth?: IUserLogged;
  signIn(email: string, password: string): void;
  signOut(): void;
  userLogged(): boolean;
}


interface IUserLogged {
  email: string;
  id: number;
  roles: Array<string>;
}

const AuthContext = createContext<IauthContext>({} as IauthContext);

const AuthProvider: React.FC = ({ children }) => {

  const [userAuth, setUserAuth] = useState<IUserLogged>();

  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@meu-app:logged');
    // se tem conteúdo, verdadeiro, se não, falso
    return !!isLogged;
  });

  const { addToast } = useToasts();
  async function signIn(email: string, password: string) {
    try {
      const res = await Axios.get(ajaxUrl.analysts.get)
      const { data } = res
      let obj;
      let authorized = false;
      data.forEach((user: any) => {
        if (user.email === email && user.password === password) {
          authorized = true;
          console.log("vamos ver " + user.roles)
          obj = {
            email: email,
            roles: user.roles,
            id: user.id
          }
        }
      })
      if (authorized) {
        localStorage.setItem("@meu-app:logged", 'true');
        setLogged(true);
        setUserAuth(obj)

      } else {
        addToast("senha ou usuario invalidos", { appearance: 'error' });
      }
    } catch (error) {
      addToast("Erro de rede!", { appearance: 'error' });
      console.log(error)
    }
  }


  const userLogged = useCallback(() => {
    const token = localStorage.getItem('@meu-app:logged');
    if (token)
      return true
    else
      return false
  }, [])


  const signOut = () => {
    localStorage.removeItem("@meu-app:logged");
    setLogged(false);
  }

  return <AuthContext.Provider value={{ logged, signIn, signOut, userLogged, userAuth }}>
    {children}
  </AuthContext.Provider>
}

function useAuth(): IauthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };