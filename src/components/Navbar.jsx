import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const firstName = personal.name.split(' ')[0]
  const initials = personal.name.split(' ').map(n => n[0]).slice(0, 2).join('')

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className={styles.logoIcon}>{initials}</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>{personal.name}</span>
            <span className={styles.logoRole}>{personal.role}</span>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.id}>
              <button
                className={`${styles.link} ${active === l.id ? styles.activeLink : ''}`}
                onClick={() => handleNav(l.id)}
              >
                {l.label}
                {active === l.id && (
                  <motion.span className={styles.activeDot} layoutId="activeDot" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a href={personal.github} target="_blank" rel="noopener" className={styles.socialIcon} aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.socialIcon} aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.toggle} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(l => (
              <button
                key={l.id}
                className={`${styles.mobileLink} ${active === l.id ? styles.mobileLinkActive : ''}`}
                onClick={() => handleNav(l.id)}
              >
                {l.label}
              </button>
            ))}
            <div className={styles.mobileCta}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
