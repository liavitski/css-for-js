import type { Metadata } from 'next';
import { Raleway, Redacted_Script } from 'next/font/google';
import './styles.css';

const primaryFont = Raleway({
  weight: ['500', '600', '800'],
  subsets: ['latin'],
});

const loadingFont = Redacted_Script({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sole And Ankle',
  description: 'YOOO!!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={
        {
          '--font-family-primary': primaryFont.style.fontFamily,
          '--font-family-loading': loadingFont.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
