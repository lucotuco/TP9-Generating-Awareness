// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulamos una autenticación exitosa aquí.
    // Debes implementar la lógica real de autenticación.
    if (email === 'usuario@example.com' && password === 'contraseña') {
      setUser({ email });
      return true; // Autenticación exitosa
    } else {
      return false; // Autenticación fallida
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
