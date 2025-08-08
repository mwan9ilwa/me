import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Mwangilwa
      </Link>
      <nav className={styles.nav}>
        <ThemeToggleButton />
      </nav>
    </header>
  );
}