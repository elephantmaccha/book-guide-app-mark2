"use client";
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("検索エラー:", error);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#8b4513', fontSize: '2rem', marginBottom: '30px' }}>
        📖 Book Guide Mark II
      </h1>
      
      <form onSubmit={searchBooks} style={{ display: 'flex', gap: '10px', marginBottom: '40px' }}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="心に響く本を探す..."
          style={{ 
            flex: 1, 
            padding: '14px', 
            borderRadius: '12px', 
            border: '2px solid #eaddca', 
            backgroundColor: '#ffffff',
            color: '#443322',
            fontSize: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        />
        <button type="submit" style={{ 
          padding: '12px 28px', 
          backgroundColor: '#d2691e', // 温かいテラコッタ色
          color: 'white', 
          border: 'none', 
          borderRadius: '12px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.3s'
        }}>
          検索
        </button>
      </form>

      {loading && <p style={{ textAlign: 'center', color: '#8b4513' }}>本を読み込んでいます...</p>}

      <div style={{ display: 'grid', gap: '25px' }}>
        {books.map((book: any) => (
          <div key={book.id} style={{ 
            border: '1px solid #f3e5ab', 
            padding: '25px', 
            borderRadius: '16px', 
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(139, 69, 19, 0.08)'
          }}>
            <h2 style={{ fontSize: '1.25rem', margin: '0 0 10px 0', color: '#5d4037' }}>{book.volumeInfo.title}</h2>
            <p style={{ color: '#8d6e63', fontSize: '0.9rem', marginBottom: '15px' }}>
              著者: {book.volumeInfo.authors?.join(', ') || '不明'}
            </p>
            
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img 
                  src={book.volumeInfo.imageLinks.thumbnail} 
                  alt={book.volumeInfo.title} 
                  style={{ borderRadius: '4px', width: '100px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }} 
                />
              )}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#4e342e' }}>
                  {book.volumeInfo.description ? book.volumeInfo.description.substring(0, 150) + '...' : '（解説はまだありません）'}
                </p>
                <a 
                  href={book.volumeInfo.infoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#d2691e', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}
                >
                  この本を詳しく見る ➔
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <footer style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid #eaddca', padding: '30px' }}>
        <a href="/privacy" style={{ color: '#a1887f', fontSize: '0.85rem', textDecoration: 'none' }}>プライバシーポリシー</a>
      </footer>
    </main>
  );
}