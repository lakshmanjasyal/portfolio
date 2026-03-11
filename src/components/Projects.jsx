import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
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
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <p className="section-tag">What I've Built</p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.intro}>
            A collection of projects showcasing my skills in web development, IoT, and AI.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`${styles.card} ${p.featured ? styles.featuredCard : ''}`}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Featured badge */}
              {p.featured && (
                <div className={styles.featuredBadge}>
                  <Star size={12} fill="currentColor" /> Featured
                </div>
              )}

              {/* Card header with project icon */}
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>{p.icon}</div>
                <div className={styles.links}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener" className={styles.iconBtn} title="GitHub">
                      <Github size={17} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className={styles.iconBtn} title="Live Demo">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title and year */}
              <h3 className={styles.title}>{p.title}</h3>
              <span className={styles.year}>{p.year}</span>

              {/* Description */}
              <p className={styles.desc}>{p.description}</p>

              {/* Tech tags */}
              <div className={styles.tags}>
                {p.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Live link */}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener" className={styles.viewLink}>
                  View Live ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
