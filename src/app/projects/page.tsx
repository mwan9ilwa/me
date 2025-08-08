import styles from './page.module.css';

const projects = [
  {
    title: 'Interactive Data Visualization Dashboard',
    desc: 'A platform to create and share dynamic charts from public APIs. I plan to use D3.js with React for the rendering engine and explore serverless functions for data fetching.'
  },
  {
    title: 'AI-Powered Personal Finance Tracker',
    desc: 'An intelligent app that categorizes spending automatically and provides saving recommendations. I want to experiment with Plaid API for bank integration and a simple NLP model for transaction parsing.'
  },
  {
    title: 'Collaborative Code Snippet Manager',
    desc: 'A web app for teams to save, tag, and share useful code snippets. This would be a great opportunity to build a real-time application using WebSockets or a service like Supabase.'
  }
];

export default function FutureProjectsPage() {
  return (
    <div className="fade-in-content">
      <h1 className={styles.pageTitle}>Future Projects</h1>
      <p className={styles.subtitle}>
        A list of ideas I'm excited to explore and build in my spare time.
      </p>

      <div className={styles.projectsList}>
        {projects.map(project => (
          <div key={project.title} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDesc}>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}