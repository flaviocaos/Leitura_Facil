# Arquitetura da Aplicação - Leitura Fácil

A aplicação segue uma arquitetura de SPA (Single Page Application) com React.

## Estrutura de Diretórios
src/
├── components/
│ └── Header.jsx
├── pages/
│ ├── Home.jsx
│ ├── Busca.jsx
│ ├── Cadastro.jsx
│ └── NotFound.jsx
├── App.jsx
├── index.js
└── style.csssrc/
├── components/
│ └── Header.jsx
├── pages/
│ ├── Home.jsx
│ ├── Busca.jsx
│ ├── Cadastro.jsx
│ └── NotFound.jsx
├── App.jsx
├── index.js
└── style.css


## Bibliotecas Utilizadas
- `React Router DOM`: roteamento SPA
- `Axios`: requisições HTTP
- `localStorage`: persistência local

## API Integrada
- Google Books API (https://www.googleapis.com/books/v1/volumes)
