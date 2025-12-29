'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 既に同意済みかどうかを確認
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
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
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      zIndex: 9999,
      border: '1px solid #eaddca',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
        <strong>Cookie Usage:</strong> We use cookies to analyze site traffic and improve your experience. 
        By clicking "Accept", you consent to our use of cookies in accordance with our 
        <a href="/privacy" style={{ color: '#d2691e', marginLeft: '5px' }}>Privacy Policy</a>.
      </div>
      <button
        onClick={acceptCookies}
        style={{
          backgroundColor: '#d2691e',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          alignSelf: 'flex-end'
        }}
      >
        Accept All
      </button>
    </div>
  );
}