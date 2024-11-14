import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = ({ onNavigateToGenerator }) => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bem-vindo à página principal!</h1>
      <button onClick={onNavigateToGenerator}>Ir para Gerador de Senhas</button>
      <button onClick={logoutUser}>Sair</button>
    </div>
  );
};

export default HomePage;
