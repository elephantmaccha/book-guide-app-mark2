import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Book Guide App Mark II',
  description: 'Google Books APIを活用した書籍検索サービス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* 【重要】Google AdSense 審査用自動広告コード */}
        {/* ca-pub-XXXX の部分を自分のIDに書き換えてください */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}

        {/* 【重要】Google Analytics (GA4) 設定 */}
        {/* G-XXXXXXXXXX の部分を自分の測定IDに書き換えてください */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}