import { motion } from 'framer-motion'
import { Box, Circle } from 'lucide-react'
import { personal } from '../data/portfolio'
import profilePhoto from '../assets/profile.jpg'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.p className={styles.greeting} {...fadeUp(0.1)}>
            Hi 👋, I'm a
          </motion.p>
          <motion.h1 className={styles.title} {...fadeUp(0.2)}>
            Software Developer
          </motion.h1>
          <motion.p className={styles.description} {...fadeUp(0.3)}>
            I'm <strong>{personal.name}</strong>, a developer dedicated to making the world a better place one line of code at a time.
          </motion.p>
          
          <motion.div className={styles.cta} {...fadeUp(0.4)}>
            <a href="#contact" className="btn btn-primary">Hire me</a>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <motion.div 
              className={styles.decoCube}
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Box size={32} color="#7c6cff" />
            </motion.div>
            
            <div className={styles.decoWave}>
              <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                <path d="M10 10C30 10 30 30 50 30S50 50 10 50 10 70 50 70" stroke="#7c6cff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <motion.div 
              className={styles.profileBox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={profilePhoto} alt={personal.name} className={styles.photo} />
            </motion.div>

            <div className={styles.decoDots}>
              <div className="dots-grid">
                {[...Array(9)].map((_, i) => <div key={i} className="dot" />)}
              </div>
            </div>

            <div className={styles.decoPlus}>+</div>
            <div className={styles.decoCircle} />
          </div>
        </div>
      </div>
    </section>
  )
}
