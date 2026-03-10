import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

const contactItems = [
  { icon: <Mail size={22} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, id: 'contact-email' },
  { icon: <Linkedin size={22} />, label: 'LinkedIn', value: 'lakshman-jasyal', href: personal.linkedin, id: 'contact-linkedin' },
  { icon: <Github size={22} />, label: 'GitHub', value: 'lakshmanjasyal', href: personal.github, id: 'contact-github' },
  { icon: <Phone size={22} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g,'')}`, id: 'contact-phone' },
]

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
        <motion.div className="section-header" {...fadeUp(0)}>
          <p className="section-tag">Let's Connect</p>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        </motion.div>

        <motion.p className={styles.sub} {...fadeUp(0.1)}>
          I'm actively looking for <strong>internships and full-time opportunities</strong>. Whether you have a project in mind, a role to fill, or just want to say hi — my inbox is always open!
        </motion.p>

        <div className={styles.grid}>
          {contactItems.map((item, i) => (
            <motion.a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${styles.card} glass-card`}
              {...fadeUp(0.1 + i * 0.08)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.label}>{item.label}</h3>
              <p className={styles.value}>{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div className={styles.cta} {...fadeUp(0.5)}>
          <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '14px 40px' }}>
            <Mail size={18} /> Hire Me — Send Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className="btn btn-outline">
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
