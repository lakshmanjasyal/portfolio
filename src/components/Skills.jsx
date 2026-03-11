import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

/* Map language names to colors */
const langColors = {
  'HTML & CSS':   { bg: '#fff0f0', border: '#f05454', text: '#f05454' },
  'JavaScript':   { bg: '#fffbeb', border: '#f59e0b', text: '#d97706' },
  'Java (DSA)':   { bg: '#eff6ff', border: '#3b82f6', text: '#2563eb' },
  'Python':       { bg: '#f0fdf4', border: '#22c55e', text: '#16a34a' },
  'C++':          { bg: '#faf5ff', border: '#a855f7', text: '#9333ea' },
}

export default function Skills() {
  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container">
        {/* Heading */}
        <motion.div className="section-header" {...fadeUp(0)}>
          <p className="section-tag">What I Know</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className={styles.intro}>
            I have hands-on experience with the following technologies, frameworks, and tools.
          </p>
        </motion.div>

        {/* Languages */}
        <div className={styles.langSection}>
          <motion.h3 className={styles.subHeading} {...fadeUp(0.1)}>
            💻 Programming Languages
          </motion.h3>
          <div className={styles.langGrid}>
            {skills.languages.map((lang, i) => {
              const colors = langColors[lang.name] || { bg: '#f1f5f9', border: '#64748b', text: '#475569' }
              return (
                <motion.div
                  key={lang.name}
                  className={styles.langCard}
                  style={{ '--lang-bg': colors.bg, '--lang-border': colors.border, '--lang-text': colors.text }}
                  {...fadeUp(0.1 + i * 0.08)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.hexWrap}>
                    <div className={styles.hex}>
                      <span className={styles.hexLetter}>{lang.name[0]}</span>
                    </div>
                  </div>
                  <span className={styles.langName}>{lang.name}</span>
                  {/* Skill level bar */}
                  <div className={styles.levelBar}>
                    <motion.div
                      className={styles.levelFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className={styles.levelText}>{lang.level}%</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className={styles.toolsSection}>
          <motion.h3 className={styles.subHeading} {...fadeUp(0.2)}>
            🛠️ Frameworks & Tools
          </motion.h3>
          <motion.div className={styles.toolsGrid} {...fadeUp(0.3)}>
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                className={styles.toolPill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Bottom row: Soft Skills + Certs */}
        <div className={styles.bottomRow}>
          {/* Soft Skills */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.3)}>
            <h3 className={styles.cardTitle}>🧠 Soft Skills</h3>
            <div className={styles.softGrid}>
              {skills.soft.map(s => (
                <div key={s} className={styles.softItem}>
                  <span className={styles.softCheck}>✓</span>
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.4)}>
            <h3 className={styles.cardTitle}>📜 Certifications</h3>
            <div className={styles.certList}>
              {skills.certifications.map((c, i) => (
                <div key={i} className={styles.certItem}>
                  <span className={`${styles.certBadge} ${styles[`cert${c.status.replace(' ', '')}`]}`}>
                    {c.status}
                  </span>
                  <p className={styles.certName}>{c.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
