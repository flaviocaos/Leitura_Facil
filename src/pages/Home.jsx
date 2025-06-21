import React from 'react';

function Home() {
  return (
    <div className="pagina">
      <h1>Leitura Fácil</h1>
      <p>
        Esta aplicação foi desenvolvida como parte do projeto final da disciplina de Desenvolvimento Front-end Avançado do curso de Pós-graduação em Desenvolvimento Full Stack.
      </p>
      <p>
        O sistema permite que você pesquise livros por meio da API pública do Google Books e também cadastre seus livros favoritos localmente no navegador utilizando localStorage.
      </p>
      <p>
        A interface é simples, responsiva e demonstra os conceitos de componentização, roteamento com React Router, uso de hooks como useState e useEffect, e boas práticas com React moderno.
      </p>
      <p>
        Utilize os links no menu superior para navegar entre as funcionalidades.
      </p>

      <hr />

      <section>
        <h2>Informações do Aluno</h2>
        <p><strong>Aluno:</strong> Flávio Antonio Oliveira da Silva</p>
        <p><strong>Email:</strong> flaviocartografia@gmail.com</p>
      </section>

      <hr />

      <section>
        <h3>Envie uma Mensagem</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada com sucesso!");
        }}>
          <label htmlFor="mensagem">Mensagem:</label><br />
          <textarea id="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem aqui..."></textarea><br />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;

