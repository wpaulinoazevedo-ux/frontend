import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '72px', color: '#e74c3c', margin: '0 0 10px 0' }}>404</h1>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Página Não Encontrada</h2>
      <p style={{ color: '#7f8c8d', fontSize: '18px', marginBottom: '30px' }}>
        Desculpe, a página que você está tentando acessar não existe em nossa oficina.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '12px 24px',
          background: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        ⬅️ Voltar para o Início
      </button>
    </div>
  );
}

// Exportação declarada explicitamente no fim do arquivo
export default NotFound;
