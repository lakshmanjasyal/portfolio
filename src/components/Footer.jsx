import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* Wavy top divider */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#30475E" />
        </svg>
      </div>

      <div className={styles.main}>
        <div className="container">
          <div className={styles.inner}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>LJ</div>
                <div>
                  <p className={styles.logoName}>{personal.name}</p>
                  <p className={styles.logoRole}>{personal.role}</p>
                </div>
              </div>
              <p className={styles.tagline}>
                BTech CSE · CUSAT · Visteon Scholar · PMSSS Recipient
              </p>
            </div>

            {/* Quick links */}
            <div className={styles.links}>
              <p className={styles.linksTitle}>Quick Links</p>
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(l => (
                <button
                  key={l}
                  className={styles.link}
                  onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Contact / Socials */}
            <div className={styles.contact}>
              <p className={styles.linksTitle}>Connect</p>
              <a href={personal.github} target="_blank" rel="noopener" className={styles.contactItem}>
                <Github size={16} /> @lakshmanjasyal
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.contactItem}>
                <Linkedin size={16} /> @lakshman-jasyal
              </a>
              <a href={`mailto:${personal.email}`} className={styles.contactItem}>
                <Mail size={16} /> {personal.email}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.copy}>
              © {currentYear} {personal.name}. Built with React + Vite <Heart size={13} fill="currentColor" style={{ color: '#f05454', display: 'inline' }} />
            </p>
            <div className={styles.socials}>
              <a href={personal.github} target="_blank" rel="noopener" aria-label="GitHub"><Github size={18} /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
