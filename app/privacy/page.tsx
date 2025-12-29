'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', color: '#443322', lineHeight: '1.8' }}>
      <h1 style={{ color: '#8b4513', borderBottom: '2px solid #eaddca', paddingBottom: '10px' }}>Privacy Policy</h1>
      <p style={{ fontSize: '0.9rem', color: '#8d6e63' }}>Last Updated: December 29, 2025</p>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Introduction</h2>
        <p>Welcome to Smart Book Guide. We value your privacy and are committed to protecting your personal data. This policy explains how we use cookies and manage your information.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. Cookie Policy</h2>
        <p>We use cookies to improve your browsing experience. You can manage your preferences through our Cookie Preference Center.</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
          <li><strong>Analytics Cookies (Google Analytics):</strong> Used to understand how visitors interact with our website, helping us improve our service.</li>
          <li><strong>Advertising Cookies (Google AdSense):</strong> Used to serve personalized advertisements based on your interests and previous browsing history.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Google AdSense & Analytics</h2>
        <p>This site uses Google services. Google may use cookies to serve ads based on a user's prior visits to your website or other websites. You may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" style={linkStyle}>Google Ads Settings</a>.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Data Protection</h2>
        <p>We do not sell or share your personal information with third parties, except as required to provide our services through Google's APIs and advertising platforms.</p>
      </section>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#d2691e', fontWeight: 'bold', textDecoration: 'none' }}>← Back to Home</a>
      </div>
    </main>
  );
}

const sectionStyle = { marginBottom: '30px' };
const headingStyle = { color: '#8b4513', fontSize: '1.4rem', marginBottom: '10px' };
const linkStyle = { color: '#d2691e', textDecoration: 'underline' };