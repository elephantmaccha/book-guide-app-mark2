'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 既に同意または拒否の選択済みかを確認
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    // 実際にはここでGoogle Analyticsなどのタグを無効化する処理を入れることが一般的です
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      backgroundColor: '#ffffff',
      color: '#443322',
      padding: '25px',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      zIndex: 9999,
      border: '1px solid #eaddca',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <div style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#8b4513' }}>Cookie Settings</h3>
        We use cookies to enhance your experience and analyze traffic. You can choose to accept all, reject non-essential cookies, or manage your preferences.
        <a href="/privacy" style={{ color: '#d2691e', textDecoration: 'underline', marginLeft: '5px' }}>Privacy Policy</a>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <button
          onClick={handleReject}
          style={{
            backgroundColor: '#f5f5dc',
            color: '#8b4513',
            border: '1px solid #eaddca',
            padding: '10px 18px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}
        >
          Reject All
        </button>
        <button
          onClick={() => alert('Detailed settings will be available soon.')}
          style={{
            backgroundColor: 'transparent',
            color: '#a1887f',
            border: '1px solid #a1887f',
            padding: '10px 18px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
        >
          Customize
        </button>
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: '#d2691e',
            color: 'white',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}