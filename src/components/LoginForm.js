import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ onSwitchToSignUp }) => {
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const result = loginUser(username, password);
    if (!result.success) {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      <p>{message}</p>
      <button onClick={onSwitchToSignUp}>Não tem uma conta? Cadastre-se</button>
    </div>
  );
};

export default LoginForm;
