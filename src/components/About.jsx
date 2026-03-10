import { motion } from 'framer-motion'
import { MapPin, BookOpen, Heart } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Photo */}
          <motion.div className={styles.photoWrap} {...fadeUp(0.1)}>
            <div className={styles.photoRing}>
              <div className={styles.avatarInner}>LNJ</div>
            </div>
            <div className={styles.scholars}>
              <div className={styles.scholarBadge}>
                <span>🏭</span>
                <div>
                  <strong>Visteon Scholar</strong>
                  <small>Visteon India Mentorship</small>
                </div>
              </div>
              <div className={styles.scholarBadge}>
                <span>🏅</span>
                <div>
                  <strong>PMSSS Recipient</strong>
                  <small>PM's Special Scholarship</small>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className={styles.content} {...fadeUp(0.2)}>
            <p className={styles.bio}>{personal.bio1}</p>
            <p className={styles.bio}>{personal.bio2}</p>

            <div className={styles.facts}>
              <div className={styles.factRow}>
                <MapPin size={16} className={styles.factIcon} />
                <span><strong>{personal.location}</strong> — Originally from {personal.origin}</span>
              </div>
              <div className={styles.factRow}>
                <BookOpen size={16} className={styles.factIcon} />
                <span><strong>Languages:</strong> {personal.languages.join(', ')}</span>
              </div>
              <div className={styles.factRow}>
                <Heart size={16} className={styles.factIcon} />
                <span><strong>Interests:</strong> {personal.interests.join(' · ')}</span>
              </div>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>8.44</span>
                <span className={styles.statLabel}>CGPA</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>5+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>Internships</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Connections</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
