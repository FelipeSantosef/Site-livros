import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ReadBook from './components/ReadBook';
import fetchBooks from './utils/fetchBooks';

function App() {
  const [books, setBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBooks()
        .then((fetchedBooks) => setBooks(fetchedBooks))
        .catch((error) => {
          console.error('Erro ao buscar livros:', error);
          setBooks([]);
        });
    }
  }, [isAuthenticated]);

  const handleLogin = (username, password) => {
    if (username === 'Felipe' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/livro/:id" element={<ReadBook books={books} />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redireciona caminhos errados */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
