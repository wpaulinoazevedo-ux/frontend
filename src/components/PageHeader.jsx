import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PageHeader({ title }) {
  const location = useLocation();
  const mensagemInfo = location.state?.mensagem;

  return (
    <div style={{ marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
      <h1 style={{ color: '#333', margin: 0 }}>{title}</h1>
      {mensagemInfo && (
        <div style={{ marginTop: '10px', padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          {mensagemInfo}
        </div>
      )}
    </div>
  );
}
