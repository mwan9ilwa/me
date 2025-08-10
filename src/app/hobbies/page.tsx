import styles from './page.module.css';

const tools = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js',
  'Claude', 'Copilot', 'Gemini', 'Python', 'Chrome', 'VS Code', 'Stitch'
];

const hobbies = [
  { name: 'Photography', desc: 'Capturing landscapes and urban scenes through my lens', url: 'https://www.instagram.com/mwan9i/' },
  { name: 'Gaming', desc: 'Unwinding with strategic games and exploring virtual worlds on Xbox. Currently playing Battlefield 6 Open beta, COD Warzone, FC25 and Forza Horizon 5.', url: 'https://www.xbox.com/en-US/play/user/Mwvng' },
  { name: 'Tech Exploration', desc: 'Experimenting with new frameworks and staying current with industry trends', url: 'https://github.com/trending' }
];

const resources = [
  { name: 'Roadmaps', desc: 'Community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.', url: 'https://roadmap.sh' },
  { name: 'Material Design', desc: 'Google’s open-source design system for building beautiful, usable products.', url: 'https://m3.material.io' },
  { name: 'MDN Web Docs', desc: 'Comprehensive documentation for web development standards', url: 'https://developer.mozilla.org' },
  { name: 'DevTools', desc: 'Browser debugging tools for frontend optimization', url: 'https://developer.chrome.com/docs/devtools' },
  { name: 'Apple Design', desc: 'Design incredible apps and games that integrate seamlessly with Apple platforms.', url: 'https://developer.apple.com/design' }
];

export default function ToolsHobbiesPage() {
  return (
    <div className="fade-in-content">
      {/* Tools Section */}
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>What I Use</h1>
        <p className={styles.intro}>
          My toolkit consists of modern technologies and tools that help me build efficient, scalable, and user-friendly applications.
        </p>
        <ul className={styles.toolsList}>
          {tools.map(tool => (
            <li key={tool} className={styles.toolItem}>
              {tool}
            </li>
          ))}
        </ul>
      </section>

      {/* Hobbies Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What I Do For Fun</h2>
        <p className={styles.intro}>
          Outside of coding, I enjoy various activities that keep me balanced, inspired, and continuously learning.
        </p>
        <ul className={styles.hobbiesList}>
          {hobbies.map(hobby => (
            <li key={hobby.name} className={styles.hobbyItem}>
              <h3 className={styles.hobbyName}>
                <a href={hobby.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  {hobby.name}
                </a>
              </h3>
              <p className={styles.hobbyDesc}>{hobby.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Resources Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Other Resources</h2>
        <p className={styles.intro}>
          Essential platforms and tools that enhance my development workflow and keep me connected with the tech community.
        </p>
        <ul className={styles.hobbiesList}>
          {resources.map(resource => (
            <li key={resource.name} className={styles.hobbyItem}>
              <h3 className={styles.hobbyName}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  {resource.name}
                </a>
              </h3>
              <p className={styles.hobbyDesc}>{resource.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}