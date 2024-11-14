import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = (username, email, password) => {
    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) return { success: false, message: 'Usuário já existe!' };
    
    setUsers([...users, { username, email, password }]);
    return { success: true };
  };

  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, message: 'Credenciais inválidas!' };
  };

  const logoutUser = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
