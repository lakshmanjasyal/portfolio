import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Work History</p>
          <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
        </motion.div>

        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <motion.div key={item.id} className={styles.item} {...fadeUp(i * 0.08)}>
              <div className={styles.dotCol}>
                <div className={`${styles.dot} ${item.status === 'ongoing' ? styles.dotActive : ''}`} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.org}>{item.org}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={`${styles.badge} ${item.status === 'ongoing' ? styles.badgeOngoing : styles.badgeDone}`}>
                      {item.status === 'ongoing' ? '● Ongoing' : item.period}
                    </span>
                  </div>
                </div>
                <p className={styles.location}>📍 {item.location}</p>
                <ul className={styles.bullets}>
                  {item.bullets.map((b, bi) => (
                    <li key={bi} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
                <div className={styles.tags}>
                  {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
