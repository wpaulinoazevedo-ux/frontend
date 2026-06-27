import React from 'react';

export default function DataTable({ headers, data, keys }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <thead>
        <tr style={{ background: '#ecf0f1', borderBottom: '2px solid #bdc3c7' }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: '12px', textAlign: 'left', color: '#2c3e50' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={headers.length} style={{ padding: '20px', textAlign: 'center', color: '#7f8c8d' }}>
              Nenhum registro encontrado.
            </td>
          </tr>
        ) : (
          data.map((item, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid #eee' }}>
              {keys.map((key, colIndex) => (
                <td key={colIndex} style={{ padding: '12px', color: '#333' }}>{item[key]}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
