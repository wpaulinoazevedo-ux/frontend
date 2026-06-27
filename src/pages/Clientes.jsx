import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import BDOficina from '../dados.json';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('db_oficina');
    if (!data) {
      localStorage.setItem('db_oficina', JSON.stringify(BDOficina));
      setClientes(BDOficina.clientes);
    } else {
      setClientes(JSON.parse(data).clientes);
    }
  }, []);

  return (
    <div>
      <PageHeader title="Consulta de Clientes" />
      <p style={{ color: '#666' }}>Lista completa de clientes da oficina para consulta rápida.</p>
      <DataTable 
        headers={['ID', 'Nome do Cliente', 'Telefone de Contato']} 
        data={clientes} 
        keys={['id', 'nome', 'telefone']} 
      />
    </div>
  );
}
