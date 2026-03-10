import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

function SkillBar({ name, level, inView }) {
  return (
    <div className={styles.barItem}>
      <div className={styles.barHeader}>
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Skills() {
  const barsRef = useRef(null)
  const inView = useInView(barsRef, { once: true, margin: '-80px' })

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">What I Know</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Language Bars */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.1)} ref={barsRef}>
            <h3 className={styles.catTitle}><span>💻</span> Languages</h3>
            <div className={styles.bars}>
              {skills.languages.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.2)}>
            <h3 className={styles.catTitle}><span>🛠️</span> Frameworks & Tools</h3>
            <div className={styles.pills}>
              {skills.tools.map(t => (
                <motion.span key={t} className={styles.pill} whileHover={{ scale: 1.06 }}>{t}</motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.25)}>
            <h3 className={styles.catTitle}><span>🧠</span> Soft Skills</h3>
            <div className={styles.pills}>
              {skills.soft.map(t => (
                <motion.span key={t} className={`${styles.pill} ${styles.pillSoft}`} whileHover={{ scale: 1.06 }}>{t}</motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className={`${styles.card} glass-card`} {...fadeUp(0.3)}>
            <h3 className={styles.catTitle}><span>📜</span> Certifications</h3>
            <div className={styles.certs}>
              {skills.certifications.map((c, i) => (
                <div key={i} className={styles.certItem}>
                  <span className={`${styles.certBadge} ${c.status === 'In Progress' ? styles.certProgress : styles.certDone}`}>
                    {c.status}
                  </span>
                  <span className={styles.certName}>{c.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
