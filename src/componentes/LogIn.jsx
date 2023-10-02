import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, isAuthenticated } = useAuth(); // Obtiene las funciones y el estado de autenticación desde el contexto

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      login(savedUsername, savedPassword); // Inicia sesión automáticamente con los datos guardados
    }
  }, [login]); // Agrega login como dependencia

  const handleLogin = () => {
    const success = login(username, password); // Llama a la función login del contexto
    if (success) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    logout(); // Llama a la función logout del contexto
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bienvenido, {username}!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default Login;
