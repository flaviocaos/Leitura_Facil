import React, { useState } from 'react';

function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [mensagem, setMensagem] = useState('');

  const salvarLivro = () => {
    if (titulo && autor) {
      const novoLivro = { titulo, autor };
      const livrosSalvos = JSON.parse(localStorage.getItem('livros')) || [];
      livrosSalvos.push(novoLivro);
      localStorage.setItem('livros', JSON.stringify(livrosSalvos));
      setMensagem('Livro salvo com sucesso!');
      setTitulo('');
      setAutor('');
    } else {
      setMensagem('Preencha todos os campos.');
    }
  };

  return (
    <div className="pagina">
      <h1>Cadastrar Livro</h1>
      <p>
        Aqui você pode adicionar seus livros favoritos manualmente. 
        Os livros cadastrados ficam salvos no seu navegador usando <code>localStorage</code>, 
        garantindo que permaneçam mesmo após fechar a aplicação.
      </p>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button onClick={salvarLivro}>Salvar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Cadastro;
