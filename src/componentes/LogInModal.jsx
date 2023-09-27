import React, { useState } from 'react';

function LoginModal({ show, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    onClose(); // Cierra el modal al hacer clic en "Cerrar sesión"
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {loggedIn ? (
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
    </div>
  );
}

export default LoginModal;
