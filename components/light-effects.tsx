"use client"

import { useEffect, useRef } from "react"

export function LightEffects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating light particles
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "light-particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 6 + "s"
      container.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      }, 8000)
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 500)

    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 200)
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div ref={containerRef} className="light-particles">
      {/* Animated light beams */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-light-trail" />
        <div
          className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent animate-light-trail"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-light-trail"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  )
}
