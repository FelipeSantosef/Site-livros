import React, { useState, useEffect } from 'react';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [quote, setQuote] = useState('');

  const quotes = [
    '📖 A leitura é o passaporte para infinitas aventuras.',
    '🌸 Um livro é um sonho que você segura nas mãos.',
    '💫 Ler é acender uma luz dentro da alma.',
    '📚 Cada página virada é um passo rumo a um novo universo.',
    '✨ Um bom livro é como um bom amigo: acolhe e transforma.',
    // Adicione aqui as 300 frases restantes...
  ];

  useEffect(() => {
    const form = document.querySelector('.login-card');
    form.classList.add('fade-in');

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleLogin() {
    onLogin(user, pass);
  }

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '80vh', // Controlar altura
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      fontFamily: "'Quicksand', sans-serif",
      position: 'relative',
      overflowX: 'hidden',
      paddingTop: '50px',
      flexDirection: 'column'
    }}>

      {/* Livros decorativos */}
      <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="livros decorativos" style={{
        position: 'absolute',
        top: '10px',
        left: '15px',
        width: '60px',
        opacity: 0.6,
        transform: 'rotate(-10deg)',
      }} />
      <img src="https://cdn-icons-png.flaticon.com/512/2232/2232690.png" alt="livros decorativos" style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '65px',
        opacity: 0.6,
        transform: 'rotate(10deg)',
      }} />

      {/* Mensagem motivacional */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#fff0f5',
        border: '1px solid #f8cdda',
        padding: '12px 18px',
        borderRadius: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        color: '#a47148',
        fontStyle: 'italic',
        zIndex: 9999,
        maxWidth: '300px'
      }}>{quote}</div>

      <div className="login-card" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        maxWidth: '420px',
        width: '90%',
        border: '2px dashed #a47148',
        margin: '0 auto',
        transition: 'transform 0.4s ease, opacity 0.4s ease'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '25px',
          color: '#6b4226',
          fontSize: '26px',
        }}>📚 Biblioteca TechVeronica 📚</h2>

        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#5e3929', marginBottom: '20px' }}>
          "Ler é viajar com os pés no chão e a mente no infinito."
        </p>

        <input
          type="text"
          placeholder="Nome de usuário"
          onChange={(e) => setUser(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '10px', marginBottom: '12px', border: '1px solid #d4a373' }}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPass(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #d4a373' }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            backgroundColor: '#a47148',
            color: 'white',
            border: 'none',
            fontWeight: 'bold',
            marginBottom: '20px',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#8b5e34'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#a47148'}
        >
          Entrar
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button
            style={{ flex: 1, padding: '10px', backgroundColor: '#ffb703', color: 'white', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSelHQeQZUajsA9OIh4GbidD4GMGRrgpazGoo8SLObo-KXeeAg/viewform?usp=dialog', '_blank')}
          >
            Solicite Livros
          </button>
          <button
            style={{ flex: 1, padding: '10px', backgroundColor: '#219ebc', color: 'white', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
            onClick={() => window.location.href = '/cadastro'}
          >
            Cadastre-se
          </button>
        </div>

        <a
          href="https://wa.me/5516981701965?text=Olá! Estou tendo problemas com o site.%20Preciso%20de%20ajuda%20com%20a%20livraria%20virtual."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none', color: '#25D366' }}
        >
          💬 Falar com o suporte no WhatsApp
        </a>
      </div>

      {/* Texto sobre a importância da leitura */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        marginTop: '400px', // Mais espaço entre o login e o texto
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        maxWidth: '800px',
        width: '90%',
        color: '#6b4226',
        fontStyle: 'italic',
        fontSize: '18px',
        textAlign: 'center',
        margin: '0 auto',
      }}>
        <p>
          "A leitura é uma porta aberta para o mundo, um convite a cada página virada para uma nova descoberta. Como disse o grande escritor Fernando Pessoa, 'Tudo vale a pena quando a alma não é pequena'. Os livros têm esse poder: nos fazem ver o mundo de uma maneira mais rica, mais profunda e mais verdadeira.
        </p>
        <p>
          Autores como Machado de Assis e Clarice Lispector nos ensinaram que a literatura não é apenas uma fuga da realidade, mas uma maneira de compreendê-la de forma mais completa. Ler é se permitir viajar por mundos que, muitas vezes, são mais reais do que a própria vida. Como o filósofo francês Jean-Paul Sartre afirmou, 'A leitura é a mais autêntica das liberdades'."
        </p>
        <p>
          Portanto, cada livro é uma nova oportunidade para expandir nossos horizontes, seja para explorar o desconhecido, aprender com o passado ou criar um futuro mais iluminado. Às vezes, uma simples frase de um autor pode mudar completamente nossa visão de mundo. Então, não perca a chance de ler, pois o que você lê hoje pode ser a chave para um amanhã transformador.
        </p>
      </div>

      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
