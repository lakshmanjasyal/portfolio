import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Settings } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => window.scrollTo(0,0)}>
          <div className={styles.logoIcon}>J</div>
          <div className={styles.logoText}>
            <strong>JOHN DOE</strong>
            <span>HERE FOR YOU</span>
          </div>
        </div>

        <ul className={styles.links}>
          <li><button className={styles.link} onClick={() => handleNav('skills')}>Skills</button></li>
          <li>
            <button className={`${styles.link} ${styles.linkProjects}`} onClick={() => handleNav('projects')}>
              <Settings size={18} /> Projects
            </button>
          </li>
          <li><button className={styles.link} onClick={() => handleNav('contact')}>Contact me</button></li>
        </ul>

        <button className={styles.toggle} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button className={styles.mobileLink} onClick={() => handleNav('skills')}>Skills</button>
            <button className={styles.mobileLink} onClick={() => handleNav('projects')}>Projects</button>
            <button className={styles.mobileLink} onClick={() => handleNav('contact')}>Contact me</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
