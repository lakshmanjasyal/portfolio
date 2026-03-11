import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Code2, Cpu, Globe } from 'lucide-react'
import { personal } from '../data/portfolio'
import profilePhoto from '../assets/profile.jpg'
import styles from './Hero.module.css'

/* Typing animation hook */
function useTyping(words) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timer
    if (!deleting && display.length < word.length) {
      timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80)
    } else if (!deleting && display.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && display.length > 0) {
      timer = setTimeout(() => setDisplay(display.slice(0, -1)), 45)
    } else if (deleting && display.length === 0) {
      timer = setTimeout(() => {
        setDeleting(false)
        setIndex(i => (i + 1) % words.length)
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

const stats = [
  { label: 'CGPA', value: '8.44' },
  { label: 'Projects', value: '5+' },
  { label: 'Internships', value: '2' },
  { label: 'Achievements', value: '6+' },
]

const floatCards = [
  { icon: <Globe size={18} />, label: 'Web Developer', color: '#3b82f6', delay: 0 },
  { icon: <Cpu size={18} />, label: 'IoT Developer', color: '#10b981', delay: 0.5 },
  { icon: <Code2 size={18} />, label: '8.44 CGPA', color: '#f59e0b', delay: 1 },
]

export default function Hero() {
  const typed = useTyping(personal.taglines)

  return (
    <section className={styles.hero} id="home">
      {/* Background decoration */}
      <div className={styles.bgDeco}>
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.container}>
        {/* LEFT: Text content */}
        <div className={styles.content}>
          <motion.div className={styles.badge} {...fadeUp(0.1)}>
            <span className={styles.badgePing} />
            {personal.badge}
          </motion.div>

          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            Hi, I'm<br/>
            <span className={styles.highlight}>{personal.name.split(' ')[0]}</span>{' '}
            <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div className={styles.tagline} {...fadeUp(0.3)}>
            <span className={styles.taglineStatic}>I build&nbsp;</span>
            <span className={styles.taglineTyped}>{typed}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.p className={styles.sub} {...fadeUp(0.4)}>
            {personal.subline}
          </motion.p>

          <motion.div className={styles.cta} {...fadeUp(0.5)}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Hire Me
            </a>
            <a href={personal.github} target="_blank" rel="noopener" className="btn btn-ghost">
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div className={styles.stats} {...fadeUp(0.6)}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div className={styles.socials} {...fadeUp(0.7)}>
            <a href={personal.github} target="_blank" rel="noopener" className={styles.social} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.social} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className={styles.social} aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Profile image + floating cards */}
        <div className={styles.visual}>
          {/* Floating skill cards */}
          {floatCards.map((card, i) => (
            <motion.div
              key={i}
              className={styles.floatCard}
              style={{ '--card-color': card.color, '--float-delay': `${card.delay}s` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
            >
              <span className={styles.floatIcon} style={{ color: card.color }}>{card.icon}</span>
              {card.label}
            </motion.div>
          ))}

          {/* Profile image */}
          <motion.div
            className={styles.profileWrap}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.profileRing} />
            <div className={styles.profileBox}>
              <img src={profilePhoto} alt={personal.name} className={styles.profileImg} />
            </div>
          </motion.div>

          {/* Decorative dots */}
          <div className={styles.dotsGrid}>
            {[...Array(16)].map((_, i) => <div key={i} className={styles.dotItem} />)}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className={styles.scroll}
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
