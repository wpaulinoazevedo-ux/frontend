import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/', label: 'Clientes' },
    { path: '/veiculos', label: 'Veículos' },
    { path: '/servicos', label: 'Serviços' }
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100vh' 
    }}>
      <nav style={{ 
        width: isMobile ? 'auto' : '240px', 
        background: '#2c3e50', 
        color: 'white', 
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: isMobile ? '20px' : '24px', margin: 0, textAlign: 'center' }}>Oficina</h2>
        
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          marginTop: isMobile ? '15px' : '30px',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: '10px',
          justifyContent: 'center'
        }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} style={{ flex: isMobile ? 1 : 'none' }}>
                <button
                  onClick={() => navigate(item.path)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '8px 4px' : '12px',
                    textAlign: isMobile ? 'center' : 'left',
                    fontSize: isMobile ? '13px' : '16px',
                    background: isActive ? '#3498db' : 'transparent',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: isActive ? 'bold' : 'normal',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <main style={{ 
        flex: 1, 
        padding: isMobile ? '20px' : '40px', 
        background: '#f8f9fa',
        overflowX: 'auto'
      }}>
        {children}
      </main>
    </div>
  );
}
