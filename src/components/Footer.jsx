import { Github, Linkedin, MessageCircle, Twitter, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#30475E" />
        </svg>
      </div>

      <div className={styles.main}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.socialsSide}>
              <p className={styles.sideTitle}>My social media links:</p>
              <div className={styles.icons}>
                <a href={personal.linkedin} target="_blank" rel="noopener"><Linkedin size={24} /></a>
                <a href="#"><MessageCircle size={24} /></a>
                <a href="#"><Twitter size={24} /></a>
                <a href={`mailto:${personal.email}`}><Mail size={24} /></a>
              </div>
            </div>

            <div className={styles.projectsSide}>
              <p className={styles.sideTitle}>More projects I've worked on</p>
              <a href={personal.github} target="_blank" rel="noopener" className={styles.githubLink}>
                <Github size={24} /> <span>@john-doe on github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
