import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchBooks from '../lib/books';

export default function Livro() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarLivro() {
      try {
        const livros = await fetchBooks();
        const livroSelecionado = livros.find((livro) => livro.id.toString() === id);
        setLivro(livroSelecionado);
      } catch (error) {
        console.error('Erro ao carregar o livro:', error);
      } finally {
        setLoading(false);
      }
    }

    carregarLivro();
  }, [id]);

  if (loading) return <p>Carregando livro...</p>;
  if (!livro) return <p>Livro não encontrado.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{livro.title}</h1>
      <h2 style={{ color: '#555' }}>{livro.author}</h2>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          src={livro.content}
          title={livro.title}
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
