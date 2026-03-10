import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className={styles.logo}>LNJ</a>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button
              className={`${styles.link} ${active === l ? styles.activeLink : ''}`}
              onClick={() => handleNav(l)}
            >
              {l}
              {active === l && <motion.span className={styles.dot} layoutId="navdot" />}
            </button>
          </li>
        ))}
      </ul>

      <a href="mailto:lakshmanjasyal77777@gmail.com" className={`btn btn-primary ${styles.cta}`}>
        Hire Me
      </a>

      <button className={styles.toggle} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(l => (
              <button key={l} className={styles.mobileLink} onClick={() => handleNav(l)}>{l}</button>
            ))}
            <a href="mailto:lakshmanjasyal77777@gmail.com" className="btn btn-primary">Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
