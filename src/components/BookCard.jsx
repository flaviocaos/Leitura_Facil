import React from 'react';

const BookCard = ({ livro }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{livro.title}</h3>
      <p>Autor: {livro.authors ? livro.authors.join(', ') : 'Desconhecido'}</p>
      <p>{livro.description ? livro.description.slice(0, 100) + '...' : 'Sem descrição'}</p>
    </div>
  );
};

export default BookCard;
