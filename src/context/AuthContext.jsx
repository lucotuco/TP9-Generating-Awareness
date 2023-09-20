import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Lógica de inicio de sesión, por ejemplo, guardar el usuario en el estado.
    setUser(userData);
  };

  const logout = () => {
    // Lógica de cierre de sesión, por ejemplo, eliminar el usuario del estado.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
