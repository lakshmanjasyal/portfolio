import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react'
import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

const contactItems = [
  { icon: <Mail size={22} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, id: 'contact-email', color: '#f05454' },
  { icon: <Linkedin size={22} />, label: 'LinkedIn', value: '@lakshman-jasyal', href: personal.linkedin, id: 'contact-linkedin', color: '#0077b5' },
  { icon: <Github size={22} />, label: 'GitHub', value: '@lakshmanjasyal', href: personal.github, id: 'contact-github', color: '#333' },
  { icon: <Phone size={22} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, id: 'contact-phone', color: '#22c55e' },
  { icon: <MapPin size={22} />, label: 'Location', value: personal.location, href: '#', id: 'contact-location', color: '#a855f7' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) return

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(
      `Hi Lakshman,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <p className="section-tag">Let's Connect</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={styles.sub}>
            I'm actively looking for <strong>internships and full-time opportunities</strong>.
            Whether you have a project, a role, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Contact cards */}
          <div className={styles.cardsSection}>
            <div className={styles.cards}>
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.card}
                  style={{ '--card-color': item.color }}
                  {...fadeUp(0.1 + i * 0.07)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.iconWrap}>{item.icon}</div>
                  <div>
                    <p className={styles.cardLabel}>{item.label}</p>
                    <p className={styles.cardValue}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick contact form */}
          <motion.div className={styles.formSection} {...fadeUp(0.3)}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-name">Your Name</label>
                <input
                  id="cf-name"
                  name="name"
                  className={styles.input}
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-email">Your Email</label>
                <input
                  id="cf-email"
                  name="email"
                  className={styles.input}
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className={styles.textarea}
                  rows="5"
                  placeholder="Hi Lakshman, I'd like to..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn} ${sent ? styles.sentBtn : ''}`}
              >
                {sent ? '✓ Opening Mail App…' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Big CTA */}
        <motion.div className={styles.bigCta} {...fadeUp(0.5)}>
          <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            <Mail size={20} /> Email Me Directly
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className="btn btn-outline">
            <Linkedin size={20} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
