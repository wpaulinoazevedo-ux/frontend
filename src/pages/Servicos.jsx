import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FormInput from '../components/FormInput';
import DataTable from '../components/DataTable';

export default function Servicos() {
  const navigate = useNavigate();
  const [db, setDb] = useState({ veiculos: [], servicos: [] });
  const [busca, setBusca] = useState('');
  const [form, setForm] = useState({ descricao: '', preco: '', veiculoId: '' });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('db_oficina'));
    if (data) setDb(data);
  }, []);

  const handleCadastrar = (e) => {
    e.preventDefault();
    const novoServico = { ...form, id: db.servicos.length + 1, veiculoId: Number(form.veiculoId) };
    const novoDb = { ...db, servicos: [...db.servicos, novoServico] };

    localStorage.setItem('db_oficina', JSON.stringify(novoDb));
    setDb(novoDb);
    setForm({ descricao: '', preco: '', veiculoId: '' });

    navigate('/servicos', { state: { mensagem: `🔧 Serviço adicionado com sucesso!` } });
  };

  const servicosProcessados = db.servicos
    .map(s => {
      const carro = db.veiculos.find(v => v.id === s.veiculoId);
      return { ...s, placaVeiculo: carro ? carro.placa : 'N/A', precoFormatado: `R$ ${s.preco}` };
    })
    .filter(s => s.descricao.toLowerCase().includes(busca.toLowerCase()) || s.placaVeiculo.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div>
      <PageHeader title="Ordens de Serviço" />

      <div style={{ background: 'white', padding: '20px', borderRadius: '6px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>🆕 Lançar Novo Serviço</h3>
        <form onSubmit={handleCadastrar}>
          <FormInput label="Descrição do Problema / Reparo" value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})} />
          <FormInput label="Preço Estimado (R$)" type="number" value={form.preco} onChange={e => setForm({...form, preco: e.target.value})} />
          <FormInput 
            label="Veículo Vinculado" 
            type="select" 
            value={form.veiculoId} 
            onChange={e => setForm({...form, veiculoId: e.target.value})}
            options={db.veiculos.map(v => ({ value: v.id, label: `${v.placa} - ${v.modelo}` }))}
          />
          <button type="submit" style={{ padding: '10px 20px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Registrar Ordem</button>
        </form>
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>🔍 Consultar Histórico</h3>
        <input 
          type="text" 
          placeholder="Filtrar por descrição ou placa..." 
          value={busca} 
          onChange={e => setBusca(e.target.value)} 
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
        />
        <DataTable 
          headers={['ID', 'Descrição', 'Valor', 'Placa do Veículo']} 
          data={servicosProcessados} 
          keys={['id', 'descricao', 'precoFormatado', 'placaVeiculo']} 
        />
      </div>
    </div>
  );
}
