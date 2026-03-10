import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'
import styles from './Achievements.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Beyond the Classroom</p>
          <h2 className="section-title">Achievements &amp; <span className="gradient-text">Activities</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className={`${styles.card} glass-card ${a.highlight ? styles.highlighted : ''}`}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.top}>
                <span className={styles.icon}>{a.icon}</span>
                <span className={styles.year}>{a.year}</span>
              </div>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.desc}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
