# Sistema de Oficina Mecânica

Uma aplicação web simples e adaptável (responsiva) desenvolvida em **React** para o gerenciamento e consulta de clientes, veículos e ordens de serviço de uma oficina mecânica.

## Funcionalidades

- **Clientes**: Consulta simplificada à lista de clientes cadastrados.
- **Veículos**: Cadastro de novos veículos associados a proprietários e busca dinâmica por placa ou modelo.
- **Serviços**: Lançamento de ordens de serviço vinculadas a veículos e histórico de consultas com filtros.
- **Roteamento Inteligente**: Navegação entre páginas via URL sem recarregamento (React Router), histórico de estados (`useLocation`), redirecionamentos automáticos (`useNavigate`) e página de erro 404 customizada.
- **Layout Adaptável**: Visual responsivo que se ajusta automaticamente para computadores, tablets e celulares.
- **Banco de Dados Simulado**: Persistência de dados local simulada através de um arquivo JSON estruturado carregado diretamente no `localStorage` do navegador.

---

## Pré-requisitos

Antes de iniciar, você vai precisar ter instalado em sua máquina:
- **Node.js** (versão 18.x ou superior recomendada)
- **NPM** (instalado automaticamente junto com o Node)
- Um editor de código (ex: **VS Code**)

---

## Instalação e Configuração

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

### 1. Clonar ou Baixar o Projeto
Certifique-se de colocar todos os arquivos estruturados na pasta do seu projeto. A estrutura básica de arquivos deve ser:
```text
oficina-mecanica/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── dados.json
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── PageHeader.jsx
│   │   ├── FormInput.jsx
│   │   └── DataTable.jsx
│   └── pages/
│       ├── Clientes.jsx
│       ├── Veiculos.jsx
│       ├── Servicos.jsx
│       └── NotFound.jsx
```

### 2. Navegar até a pasta do projeto
Abra o seu terminal/prompt de comando e entre na pasta raiz onde o arquivo `package.json` está localizado:
```bash
cd caminho/para/a/pasta/oficina-mecanica
```

### 3. Instalar as dependências
Execute o comando abaixo para instalar o React, o Vite e o React Router Dom:
```bash
npm install
```
*Caso tenha iniciado o projeto do zero, garanta a instalação do roteador executando explicitamente: `npm install react-router-dom`*

### 4. Configurar os Scripts (Caso necessário)
Verifique se o seu arquivo `package.json` possui os seguintes scripts configurados:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## Executando a Aplicação

Para iniciar o servidor de desenvolvimento local, execute:
```bash
npm run dev
```

O terminal exibirá um endereço local semelhante a este:
```text
  ➜  Local:   http://localhost:5173/
```
Abra o seu navegador e acesse a URL indicada para utilizar o sistema.

---
