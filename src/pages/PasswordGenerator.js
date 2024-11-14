import React, { useState } from 'react';

const PasswordGenerator = ({ onViewSavedPasswords }) => {
  const [length, setLength] = useState(13);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordName, setPasswordName] = useState('');
  const [savedPasswords, setSavedPasswords] = useState([]);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSpecialChars) characterPool += specialChars;

    if (characterPool === '') return;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const savePassword = () => {
    if (passwordName && generatedPassword) {
      setSavedPasswords([...savedPasswords, { name: passwordName, password: generatedPassword }]);
      setPasswordName('');
      setGeneratedPassword('');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Gerador de Senhas</h2>
      <input
        type="text"
        placeholder="Nome da Senha"
        value={passwordName}
        onChange={(e) => setPasswordName(e.target.value)}
      />
      <div>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <span>{length}</span>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Letras Minúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Letras Maiúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Números
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          Caracteres Especiais
        </label>
      </div>
      <button onClick={generatePassword}>Gerar</button>
      <div>
        <input
          type="text"
          readOnly
          value={generatedPassword}
          placeholder="Senha Gerada"
        />
      </div>
      <button onClick={savePassword}>Salvar Senha</button>
      <button onClick={onViewSavedPasswords}>Ver Senhas Salvas</button>
    </div>
  );
};

export default PasswordGenerator;
