import React, { createContext, useState, useContext } from 'react';
import { ajaxUrl } from "../utils/config/ajaxPaths";
import Axios from 'axios';
import { useToasts } from 'react-toast-notifications';

interface IauthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void
}

const AuthContext = createContext<IauthContext>({} as IauthContext);

const AuthProvider: React.FC = ({ children }) => {
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
      let authorized = false;
      data.forEach((user: any) => {
        if (user.email === email && user.password === password)
          authorized = true;
      })
      if (authorized) {
        localStorage.setItem("@meu-app:logged", 'true');
        setLogged(true);
        return true;
      } else {
        addToast("senha ou usuario invalidos", { appearance: 'error' });
        return false;
      }
    } catch (error) {
      addToast("Erro de rede!", { appearance: 'error' });
      console.log(error)
    }
  }


  const signOut = () => {
    localStorage.removeItem("@meu-app:logged");
    setLogged(false);
  }

  return <AuthContext.Provider value={{ logged, signIn, signOut }}>
    {children}
  </AuthContext.Provider>
}

function useAuth(): IauthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };