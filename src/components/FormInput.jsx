import React from 'react';

export default function FormInput({ label, name, value, onChange, type = 'text', options = [] }) {
  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  };

  return (
    <label style={{ display: 'block', fontWeight: 'bold', color: '#555' }}>
      {label}:
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange} style={inputStyle} required>
          <option value="">Selecione uma opção</option>
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} style={inputStyle} required />
      )}
    </label>
  );
}
