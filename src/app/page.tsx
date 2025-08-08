import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className="fade-in-content">
      {/* Hero Section */}
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>Creative Solutions, Flawless Experiences.</h1>
        <p className={styles.heroSubtitle}>
          Hello! I&apos;m Mwangi, I build elegant, high-performance user interfaces with a focus on user experience and clean code.
        </p>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Today</h2>
        <p>
          I currently lead a software engineering team, architecting and building high-performance web and mobile applications to deliver innovative, customer-centric solutions.
        </p>
        <p>
          Outside of work, I enjoy exploring the latest tech trends, capturing moments through photography, and unwinding with my Xbox.
        </p>
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          <div className={styles.experienceItem}>
            <div className={styles.timelineIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>Software Engineer</h3>
              <p className={styles.companyInfo}>iZyane InovSolutions | 2023 – Present</p>
              <p>
                Currently leading a software engineering team, architecting and implementing high-performance web and mobile applications with a strong focus on responsive and accessible user interfaces.
              </p>
            </div>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.timelineIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>Web Developer</h3>
              <p className={styles.companyInfo}>ZamFind Technologies | 2022 – 2022</p>
              <p>
                I developed full-stack web applications with a strong focus on performance and user experience.
              </p>
            </div>
          </div>
          
          <div className={styles.experienceItem}>
            <div className={styles.timelineIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M21.17 8l-4.24-4.24a1.98 1.98 0 0 0-2.81 0L12 5.88 9.88 3.76a1.98 1.98 0 0 0-2.81 0L2.83 8a1.98 1.98 0 0 0 0 2.81L4.95 12l-2.12 2.12a1.98 1.98 0 0 0 0 2.81L7.07 21.17a1.98 1.98 0 0 0 2.81 0L12 19.05l2.12 2.12a1.98 1.98 0 0 0 2.81 0l4.24-4.24a1.98 1.98 0 0 0 0-2.81L19.05 12l2.12-2.12a1.98 1.98 0 0 0 0-2.81z"></path>
              </svg>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>Google Cloud Developer</h3>
              <p className={styles.companyInfo}>Mpelembe Network | 2021 – Dec 2023</p>
              <p>
                I designed and implemented scalable cloud solutions on the Google Cloud Platform, focusing on performance optimization and cost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
