import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import styles from './Contact.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact me</h2>

        <div className={styles.flexContainer}>
          <motion.div className={styles.illustration} {...fadeUp(0.1)}>
            {/* SVG Illustration Placeholder */}
            <svg width="350" height="300" viewBox="0 0 350 300" fill="none">
              <rect x="100" y="40" width="150" height="240" rx="20" fill="#30475E" />
              <rect x="110" y="60" width="130" height="200" rx="10" fill="#1F2937" />
              <rect x="20" y="100" width="80" height="30" rx="8" fill="#7C6CFF" />
              <rect x="250" y="150" width="80" height="30" rx="8" fill="#7C6CFF" opacity="0.6" />
              <circle cx="70" cy="220" r="40" fill="#E5E7EB" />
            </svg>
          </motion.div>

          <motion.div className={styles.formArea} {...fadeUp(0.2)}>
            <form className={styles.form} onClick={e => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Enter email address" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Enter message..." className={styles.textarea} rows="5"></textarea>
              </div>
              <button className={`${styles.sendBtn}`}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
