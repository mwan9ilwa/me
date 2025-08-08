import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { ThemeScript } from './components/ThemeScript';
// Using Inter as a high-quality, clean substitute for Google Sans
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mwangilwa - Software Engineer',
  description: 'Minimalistic and modern software engineer portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className={styles.layoutWrapper}>
            <Header />
            <main className={styles.mainContent}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}