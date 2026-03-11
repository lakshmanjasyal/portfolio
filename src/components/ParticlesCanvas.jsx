import { useEffect, useRef } from 'react'

class Particle {
  constructor(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.reset()
  }
  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 1.5 + 0.3
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.4 + 0.05
    this.color = Math.random() > 0.5 ? '#7c6cff' : '#00e5ff'
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height) this.reset()
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fillStyle = this.color
    this.ctx.globalAlpha = this.opacity
    this.ctx.fill()
    this.ctx.globalAlpha = 1
  }
}

export default function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) particles.push(new Particle(canvas, ctx))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}
