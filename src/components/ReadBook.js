import React from 'react';
import { useParams } from 'react-router-dom';

export default function ReadBook({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) return <div>Livro não encontrado 😢</div>;

  return (
    <div style={{ padding: '30px' }}>
      <h2>{book.title}</h2>
      <p><i>{book.author}</i></p>
      <div style={{
        marginTop: '20px',
        whiteSpace: 'pre-wrap',
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
      }}>
        {book.content}
      </div>
    </div>
  );
}
