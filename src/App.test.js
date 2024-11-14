import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PasswordGenerator from './pages/PasswordGenerator';
import SavedPasswords from './pages/SavedPasswords';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [view, setView] = useState('generator'); // Define a visualização padrão como "generator"
  const [savedPasswords, setSavedPasswords] = useState([]);

  const handleSavePassword = (password) => {
    setSavedPasswords([...savedPasswords, password]);
  };

  if (!isAuthenticated) {
    return isSignUp ? (
      <SignUpForm onSwitchToLogin={() => setIsSignUp(false)} />
    ) : (
      <LoginForm onSwitchToSignUp={() => setIsSignUp(true)} />
    );
  }

  return (
    <div>
      {view === 'generator' && (
        <PasswordGenerator
          onViewSavedPasswords={() => setView('saved')}
          onSavePassword={handleSavePassword}
        />
      )}
      {view === 'saved' && (
        <SavedPasswords passwords={savedPasswords} onBack={() => setView('generator')} />
      )}
    </div>
  );
};

export default App;
