import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FormInput from '../components/FormInput';
import DataTable from '../components/DataTable';

export default function Veiculos() {
  const navigate = useNavigate();
  const [db, setDb] = useState({ clientes: [], veiculos: [] });
  const [busca, setBusca] = useState('');
  const [form, setForm] = useState({ placa: '', modelo: '', clienteId: '' });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('db_oficina'));
    if (data) setDb(data);
  }, []);

  const handleCadastrar = (e) => {
    e.preventDefault();
    const novoVeiculo = { ...form, id: db.veiculos.length + 1, clienteId: Number(form.clienteId) };
    const novoDb = { ...db, veiculos: [...db.veiculos, novoVeiculo] };
    
    localStorage.setItem('db_oficina', JSON.stringify(novoDb));
    setDb(novoDb);
    setForm({ placa: '', modelo: '', clienteId: '' });

    // Redireciona para atualizar a rota aplicando o useLocation do cabeçalho
    navigate('/veiculos', { state: { mensagem: `🚗 Veículo ${novoVeiculo.placa} cadastrado!` } });
  };

  const veiculosProcessados = db.veiculos
    .map(v => {
      const dono = db.clientes.find(c => c.id === v.clienteId);
      return { ...v, nomeCliente: dono ? dono.nome : 'Desconhecido' };
    })
    .filter(v => v.placa.toLowerCase().includes(busca.toLowerCase()) || v.modelo.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div>
      <PageHeader title="Gerenciamento de Veículos" />
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '6px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>🆕 Cadastrar Veículo</h3>
        <form onSubmit={handleCadastrar}>
          <FormInput label="Placa" value={form.placa} onChange={e => setForm({...form, placa: e.target.value})} />
          <FormInput label="Modelo" value={form.modelo} onChange={e => setForm({...form, modelo: e.target.value})} />
          <FormInput 
            label="Proprietário" 
            type="select" 
            value={form.clienteId} 
            onChange={e => setForm({...form, clienteId: e.target.value})}
            options={db.clientes.map(c => ({ value: c.id, label: c.nome }))}
          />
          <button type="submit" style={{ padding: '10px 20px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Salvar Veículo</button>
        </form>
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>🔍 Buscar Veículos</h3>
        <input 
          type="text" 
          placeholder="Digite a placa ou o modelo..." 
          value={busca} 
          onChange={e => setBusca(e.target.value)} 
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
        />
        <DataTable 
          headers={['ID', 'Placa', 'Modelo', 'Proprietário']} 
          data={veiculosProcessados} 
          keys={['id', 'placa', 'modelo', 'nomeCliente']} 
        />
      </div>
    </div>
  );
}
