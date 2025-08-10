import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p className={styles.footnote}>
            &copy; {currentYear} Mwangilwa. Inspired by Material Design 3 with passion for minimalistic design.
          </p>
        </div>
        
        <div className={styles.footerRight}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Explore</h3>
              <ul className={styles.footerLinks}>
                <li><Link href="/hobbies">Hobbies</Link></li>
                <li><Link href="/projects">Projects</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Connect</h3>
              <ul className={styles.footerLinks}>
                <li><a href="https://developers.google.com/profile/u/mwan9ilwa" target="_blank" rel="noopener noreferrer">Google Developer</a></li>
                <li><a href="https://github.com/mwan9ilwa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/mwan9ilwa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:mwangilwa23@gmail.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}