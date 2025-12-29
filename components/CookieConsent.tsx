'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // 個別の設定状態
  const [preferences, setPreferences] = useState({
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-settings');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveSettings = (settings: typeof preferences) => {
    localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
    setIsVisible(false);
    // ここで設定に基づいてAnalytics等の発火を制御する処理を将来的に追加可能です
  };

  const handleAcceptAll = () => {
    const allOn = { analytics: true, advertising: true };
    setPreferences(allOn);
    saveSettings(allOn);
  };

  const handleRejectAll = () => {
    const allOff = { analytics: false, advertising: false };
    setPreferences(allOff);
    saveSettings(allOff);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '20px', left: '20px', right: '20px',
      backgroundColor: '#ffffff', color: '#443322', padding: '25px',
      borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      zIndex: 9999, border: '1px solid #eaddca', maxWidth: '500px', margin: '0 auto'
    }}>
      {!showSettings ? (
        /* 通常のバナー画面 */
        <>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#8b4513' }}>Cookie Settings</h3>
            We use cookies to analyze traffic and provide personalized ads. 
            You can customize your choices below.
            <a href="/privacy" style={{ color: '#d2691e', marginLeft: '5px' }}>Privacy Policy</a>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button onClick={handleRejectAll} style={secondaryBtn}>Reject All</button>
            <button onClick={() => setShowSettings(true)} style={outlineBtn}>Customize</button>
            <button onClick={handleAcceptAll} style={primaryBtn}>Accept All</button>
          </div>
        </>
      ) : (
        /* 詳細設定画面 */
        <>
          <h3 style={{ margin: '0 0 15px 0', color: '#8b4513' }}>Preference Center</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
            <div style={settingRow}>
              <span>Analytics Cookies</span>
              <input 
                type="checkbox" 
                checked={preferences.analytics} 
                onChange={() => setPreferences({...preferences, analytics: !preferences.analytics})}
              />
            </div>
            <div style={settingRow}>
              <span>Advertising Cookies</span>
              <input 
                type="checkbox" 
                checked={preferences.advertising} 
                onChange={() => setPreferences({...preferences, advertising: !preferences.advertising})}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button onClick={() => setShowSettings(false)} style={outlineBtn}>Back</button>
            <button onClick={() => saveSettings(preferences)} style={primaryBtn}>Save My Choices</button>
          </div>
        </>
      )}
    </div>
  );
}

// スタイル定義
const primaryBtn = { backgroundColor: '#d2691e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' as const };
const secondaryBtn = { backgroundColor: '#f5f5dc', color: '#8b4513', border: '1px solid #eaddca', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' as const };
const outlineBtn = { backgroundColor: 'transparent', color: '#a1887f', border: '1px solid #a1887f', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' };
const settingRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #f5f5dc' };