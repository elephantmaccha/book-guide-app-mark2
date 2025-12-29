'use client';

import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<any[]>([]);

  const searchBooks = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#8b4513', fontSize: '2rem', marginBottom: '30px' }}>
        📖 Smart Book Guide
      </h1>

      <form onSubmit={searchBooks} style={{ display: 'flex', gap: '10px', margin: '40px 0' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find your unforgettable book..."
          style={{
            flex: 1,
            padding: '14px',
            borderRadius: '12px',
            border: '2px solid #eaddca',
            backgroundColor: '#ffffff',
            color: '#443322',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 28px',
            backgroundColor: '#d2691e',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Search
        </button>
      </form>

      <div style={{ display: 'grid', gap: '25px' }}>
        {books.map((book) => (
          <div key={book.id} style={{
            padding: '20px',
            borderRadius: '15px',
            backgroundColor: '#fffaf0',
            border: '1px solid #f5f5dc',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ color: '#5d4037', margin: '0 0 10px 0' }}>{book.volumeInfo.title}</h2>
            <p style={{ color: '#8d6e63', fontSize: '0.9rem' }}>{book.volumeInfo.authors?.join(', ')}</p>
            <p style={{ color: '#4e342e', lineHeight: '1.6', marginBottom: '15px' }}>
              {book.volumeInfo.description ? book.volumeInfo.description.substring(0, 150) + '...' : 'No description available.'}
            </p>
            
            {/* Google Booksへのリンクボタンを追加 */}
            {book.volumeInfo.infoLink && (
              <a 
                href={book.volumeInfo.infoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#8b4513',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  transition: 'background 0.3s'
                }}
              >
                View on Google Books →
              </a>
            )}
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid #eaddca', padding: '30px' }}>
        <a href="/privacy" style={{ color: '#a1887f', fontSize: '0.85rem', textDecoration: 'none' }}>
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}