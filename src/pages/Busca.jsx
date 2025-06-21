import React, { useState } from 'react';
import axios from 'axios';

function Busca() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState('');

  const buscarLivros = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${termo}`);
      setResultados(res.data.items || []);
      setErro('');
    } catch (error) {
      setErro('Erro ao buscar livros. Tente novamente.');
    }
  };

  return (
    <div className="pagina">
      <h1>Buscar Livros</h1>
      <p>
        Nesta página, você pode pesquisar livros digitando um termo (como título, autor ou assunto).
        A busca é feita através da API do Google Books e os resultados são exibidos abaixo.
      </p>
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Digite o nome do livro ou autor"
      />
      <button onClick={buscarLivros}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <ul>
        {resultados.map((livro) => (
          <li key={livro.id}>
            <strong>{livro.volumeInfo.title}</strong><br />
            {livro.volumeInfo.authors?.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Busca;

