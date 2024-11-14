import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignUpForm = ({ onSwitchToLogin }) => {
  const { registerUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    const result = registerUser(username, email, password);
    if (result.success) {
      setMessage('Cadastro realizado com sucesso!');
      onSwitchToLogin();
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Cadastrar</button>
      <p>{message}</p>
      <button onClick={onSwitchToLogin}>Já tem uma conta? Faça login</button>
    </div>
  );
};

export default SignUpForm;
