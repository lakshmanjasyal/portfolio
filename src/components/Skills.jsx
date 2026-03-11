import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Skills() {
  const allSkills = [...skills.languages, ...skills.tools.map(t => ({ name: t }))]

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className={styles.flexContainer}>
          <div className={styles.content}>
            <motion.p className={styles.intro} {...fadeUp(0.1)}>
              I have a vast experience in the following web technologies:
            </motion.p>

            <div className={styles.skillsGrid}>
              {allSkills.slice(0, 4).map((s, i) => (
                <motion.div key={s.name} className={styles.skillItem} {...fadeUp(i * 0.1)}>
                  <div className={styles.iconBox}>
                    {/* Simplified Shield/Hexagon Icon Placeholder */}
                    <div className={styles.shield}>
                      <span className={styles.skillNameAbbr}>{s.name[0]}</span>
                    </div>
                  </div>
                  <span className={styles.skillLabel}>{s.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className={styles.illustration} {...fadeUp(0.3)}>
            {/* SVG Placeholder for Undraw Illustration */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
              <rect x="50" y="50" width="200" height="200" rx="10" fill="#E5E7EB" />
              <rect x="70" y="80" width="160" height="20" rx="4" fill="#30475E" opacity="0.4" />
              <rect x="70" y="120" width="160" height="20" rx="4" fill="#30475E" opacity="0.4" />
              <rect x="70" y="160" width="160" height="20" rx="4" fill="#30475E" opacity="0.4" />
              <circle cx="280" cy="150" r="50" fill="#30475E" />
              <path d="M280 200 L280 280 M250 230 L310 230" stroke="#30475E" strokeWidth="12" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
