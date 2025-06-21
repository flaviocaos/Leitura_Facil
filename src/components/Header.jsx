import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Sistema de Livros</h1>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/busca">Buscar Livros</Link> |{" "}
      <Link to="/cadastro">Cadastrar Livro</Link>
    </nav>
  </header>
);

export default Header;
