import styles from './page.module.css';

const tools = [
  'Next.js', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Node.js',
  'CSS Modules', 'Framer Motion', 'GraphQL', 'PostgreSQL', 'Docker', 'Figma'
];

const hobbies = [
  { name: 'Photography', desc: 'Capturing landscapes and urban scenes.' },
  { name: 'Hiking', desc: 'Exploring trails and enjoying nature.' },
  { name: 'Reading', desc: 'Diving into sci-fi and non-fiction books.' }
];

export default function ToolsHobbiesPage() {
  return (
    <div className="fade-in-content">
      <h1 className={styles.pageTitle}>Tools & Hobbies</h1>
      
      <section>
        <h2 className={styles.sectionTitle}>What I Use</h2>
        <div className={styles.cardGrid}>
          {tools.map(tool => (
            <div key={tool} className={styles.toolCard}>
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>What I Do For Fun</h2>
        <div className={styles.cardGrid}>
          {hobbies.map(hobby => (
            <div key={hobby.name} className={styles.hobbyCard}>
              <h3>{hobby.name}</h3>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}