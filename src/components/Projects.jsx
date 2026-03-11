import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">What I've Built</p>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`${styles.card} glass-card ${p.featured ? styles.featured : ''}`}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {p.featured && <div className={styles.featuredBadge}>Featured</div>}
              <div className={styles.top}>
                <span className={styles.icon}>{p.icon}</span>
                <div className={styles.links}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className={styles.link} title="Live site">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener" className={styles.link} title="GitHub">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <span className={styles.year}>{p.year}</span>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {(p.live || p.github) && (
                <div className={styles.footer}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className={styles.liveBtn}>
                      View Live ↗
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
