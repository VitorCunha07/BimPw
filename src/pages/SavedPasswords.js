import React from 'react';

const SavedPasswords = ({ passwords, onBack }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Senhas Salvas</h2>
      {passwords.length === 0 ? (
        <p>Nenhuma senha salva.</p>
      ) : (
        <ul>
          {passwords.map((item, index) => (
            <li key={index}>
              <strong>{item.name}:</strong> {item.password}
            </li>
          ))}
        </ul>
      )}
      <button onClick={onBack}>Voltar</button>
    </div>
  );
};

export default SavedPasswords;
