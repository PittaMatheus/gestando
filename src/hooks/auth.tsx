import React, { createContext, useState, useContext } from 'react';

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

  const signIn = (email: string, password: string) => {
    console.log(email)
    console.log(password)

    if (email === 'matheus.pitta@gmail.com' && password === '123') {
      localStorage.setItem("@meu-app:logged", 'true');
      setLogged(true);
    } else {
      alert("senha ou usuario invalidos")
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