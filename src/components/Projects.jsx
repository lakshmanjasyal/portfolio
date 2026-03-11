import { motion } from 'framer-motion'
import { Settings, ArrowRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        <motion.div className={styles.header} {...fadeUp(0.1)}>
          <div className={styles.iconHeading}>
            <Settings size={28} />
            <h2 className={styles.title}>Projects</h2>
          </div>
          <p className={styles.subtitle}>A select number of projects</p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.card}
              {...fadeUp(i * 0.1)}
            >
              <div className={styles.imageArea}>
                <div className={p.image ? styles.imagePlaceholder : styles.imagePlaceholderEmpty}>
                  {p.image ? <img src={p.image} alt={p.title} /> : <span>Project UI</span>}
                </div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.footer}>
                  <a href={p.live || '#'} target="_blank" rel="noopener" className={styles.learnMore}>
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
