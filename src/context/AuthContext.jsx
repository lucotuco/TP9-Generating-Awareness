import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    if (email && password ) {
      setUser({ email });
      setIsAuthenticated(true); // Establece el estado de autenticación a true
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false); // Establece el estado de autenticación a false al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
