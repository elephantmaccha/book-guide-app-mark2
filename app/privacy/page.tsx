export default function Privacy() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9', color: '#4e342e', backgroundColor: '#fffcf0', minHeight: '100vh' }}>
      
      {/* 日本語セクション */}
      <h1 style={{ color: '#8b4513', borderBottom: '2px solid #eaddca', paddingBottom: '10px' }}>プライバシーポリシー</h1>
      
      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>1. 運営者情報</h2>
        <p>
          運営者：Book Guide App Mark II 運営事務局<br />
          連絡先：<span style={{ fontWeight: 'bold', color: '#d2691e' }}>standforem@gmail.com</span>
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>2. 広告の配信について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス「Googleアドセンス」を利用しています。
          広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 「Cookie」(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>3. アクセス解析について</h2>
        <p>当サイトではGoogleアナリティクスを使用しています。データは匿名で収集されており、個人を特定するものではありません。</p>
      </section>

      <section style={{ marginTop: '30px', paddingBottom: '40px', borderBottom: '1px dashed #eaddca' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>4. 免責事項</h2>
        <p>当サイトの掲載内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
      </section>

      {/* English Section */}
      <h1 style={{ color: '#8b4513', marginTop: '60px', borderBottom: '2px solid #eaddca', paddingBottom: '10px' }}>Privacy Policy</h1>
      
      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>1. Operator Information</h2>
        <p>
          Operator: Book Guide App Mark II Administration<br />
          Contact: <span style={{ fontWeight: 'bold', color: '#d2691e' }}>standforem@gmail.com</span>
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>2. Advertising</h2>
        <p>
          This website uses "Google AdSense," a third-party advertising service. 
          Ad providers may use "Cookies" (not including your name, address, email address, or telephone number) regarding your visits to this and other websites to provide advertisements about goods and services of interest to you.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>3. Data Analytics</h2>
        <p>
          This website uses Google Analytics to analyze traffic. 
          This data is collected anonymously and does not identify any individual user.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#8b4513' }}>4. Disclaimer</h2>
        <p>
          We are not responsible for any damages or losses caused by the content on this website. 
          While we strive to provide accurate information, we do not guarantee its completeness or accuracy.
        </p>
      </section>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#d2691e', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #d2691e', padding: '10px 20px', borderRadius: '8px' }}>
          ← Back to Top / トップページへ戻る
        </a>
      </div>
    </div>
  );
}