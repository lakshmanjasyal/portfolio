import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { personal } from '../data/portfolio'
import profilePhoto from '../assets/profile.jpg'
import styles from './Hero.module.css'

const useTyping = (words) => {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timer
    if (!deleting && display.length < word.length) {
      timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80)
    } else if (!deleting && display.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && display.length > 0) {
      timer = setTimeout(() => setDisplay(display.slice(0, -1)), 40)
    } else if (deleting && display.length === 0) {
      timer = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }, 300)
    }
    return () => clearTimeout(timer)
  }, [display, deleting, index, words])

  return display
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const typed = useTyping(personal.taglines)

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={styles.content}>
        <motion.div className={styles.badge} {...fadeUp(0.1)}>
          <span className={styles.badgeDot} />
          {personal.badge}
        </motion.div>

        <motion.h1 className={styles.name} {...fadeUp(0.2)}>
          Lakshman <br />
          <span className="gradient-text">Narayan Jasyal</span>
        </motion.h1>

        <motion.div className={styles.tagline} {...fadeUp(0.35)}>
          <span className={styles.staticText}>I build </span>
          <span className={styles.typed}>{typed}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        <motion.p className={styles.sub} {...fadeUp(0.45)}>
          {personal.subline}
        </motion.p>

        <motion.div className={styles.cta} {...fadeUp(0.55)}>
          <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) }}>
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }}>
            Hire Me
          </a>
          <a href={personal.github} target="_blank" rel="noopener" className="btn btn-ghost">
            <Github size={16} /> GitHub
          </a>
        </motion.div>

        <motion.div className={styles.socials} {...fadeUp(0.65)}>
          <a href={personal.github} target="_blank" rel="noopener" className={styles.socialIcon} aria-label="GitHub"><Github size={22} /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={22} /></a>
          <a href={`mailto:${personal.email}`} className={styles.socialIcon} aria-label="Email"><Mail size={22} /></a>
        </motion.div>
      </div>

      {/* RIGHT — Profile photo with glowing spinning ring */}
      <div className={styles.decoSide}>
        <motion.div
          className={styles.decoRing}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div
          className={styles.profileCircle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        >
          <img src={profilePhoto} alt="Lakshman Narayan Jasyal" className={styles.profileImg} />
        </motion.div>
        <motion.div className={`${styles.floatCard} ${styles.card1}`} {...fadeUp(0.6)}>
          <span>⚡</span> IoT Developer
        </motion.div>
        <motion.div className={`${styles.floatCard} ${styles.card2}`} {...fadeUp(0.75)}>
          <span>🌐</span> Web Developer
        </motion.div>
        <motion.div className={`${styles.floatCard} ${styles.card3}`} {...fadeUp(0.9)}>
          <span>🏅</span> Scholar
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'}) }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
