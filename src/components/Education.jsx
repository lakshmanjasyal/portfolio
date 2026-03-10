import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import styles from './Education.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Academic Background</p>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        </motion.div>

        <div className={styles.cards}>
          {education.map((e, i) => (
            <motion.div
              key={i}
              className={`${styles.card} glass-card ${e.highlight ? styles.highlighted : ''}`}
              {...fadeUp(i * 0.12)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.icon}>{e.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{e.degree}</h3>
                <p className={styles.school}>{e.school}</p>
                <p className={styles.location}>{e.location}</p>
                <div className={styles.meta}>
                  <span className={styles.year}>{e.year}</span>
                  <span className={`${styles.grade} ${e.highlight ? styles.gradeHighlight : ''}`}>
                    {e.grade} <small>{e.gradeSuffix}</small>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
