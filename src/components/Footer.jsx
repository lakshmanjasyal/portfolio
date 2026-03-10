import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>LNJ</span>
          <p className={styles.tagline}>Lakshman Narayan Jasyal</p>
          <p className={styles.sub}>BTech CSE · CUSAT · Visteon Scholar · PMSSS Recipient</p>
        </div>
        <div className={styles.socials}>
          <a href={personal.github} target="_blank" rel="noopener" className={styles.icon} aria-label="GitHub"><Github size={20} /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.icon} aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href={`mailto:${personal.email}`} className={styles.icon} aria-label="Email"><Mail size={20} /></a>
        </div>
        <p className={styles.copy}>© 2026 · Built by <strong>lakshh_73</strong> with React + ❤️</p>
      </div>
    </footer>
  )
}
