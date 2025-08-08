import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/hobbies">Hobbies</Link>
        <Link href="/projects">Projects</Link>
        <a href="https://github.com/mwan9ilwa" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>&copy; {currentYear} Mwangilwa. All Rights Reserved.</p>
    </footer>
  );
}