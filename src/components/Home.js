import { useNavigate } from 'react-router-dom';

export default function Home({ books }) {
  const navigate = useNavigate();

  if (!books || books.length === 0) {
    return (
      <div style={{
        fontSize: '18px',
        textAlign: 'center',
        marginTop: '100px',
        color: '#5e3929',
        fontFamily: "'Quicksand', sans-serif",
        backgroundColor: '#f3e9dc',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        📖 Buscando os melhores livros para você...
      </div>
    );
  }

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1519337265831-281ec6cc8514")',
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.93)',
        borderRadius: '25px',
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        border: '2px solid #e9c46a'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '30px',
          marginBottom: '40px',
          color: '#6b4226',
          fontWeight: 'bold'
        }}>
          📚 Bem-vindo à Biblioteca TechVeronica
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => navigate(`/livro/${book.id}`)}
              style={{
                backgroundColor: '#fffdf8',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                border: '1px solid #f4d58d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Ícone de livro no topo */}
              <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="livro decorativo" style={{
                position: 'absolute',
                top: '-25px',
                left: 'calc(50% - 20px)',
                width: '40px',
                height: '40px'
              }} />

              <h3 style={{ color: '#2c3e50', marginBottom: '10px', marginTop: '30px' }}>{book.title}</h3>
              <p style={{ fontStyle: 'italic', color: '#7b5e57' }}>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
