"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Code, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react/jsx-runtime"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const [visible, setVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      if (scrollDifference < 5) return // Ignore small scroll movements

      const direction = currentScrollY > lastScrollY ? "down" : "up"
      setScrollDirection(direction)

      // Show navbar when scrolling up or at the top
      if (direction === "up" || currentScrollY < 100) {
        setVisible(true)
      }
      // Hide navbar when scrolling down and past threshold
      else if (direction === "down" && currentScrollY > 100) {
        setVisible(false)
        setIsOpen(false) // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY)
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [lastScrollY])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto glass-minimal rounded-full z-[5000] px-6 py-3 items-center justify-center space-x-6 shadow-lg",
          className,
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-foreground rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 text-background" />
          </div>
          <span className="text-base font-medium text-foreground">kankatalas</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className={cn(
                "relative text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span>{navItem.name}</span>
            </a>
          ))}
          <Button size="sm" className="btn-minimal text-sm h-9 px-4">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 glass-minimal rounded-lg shadow-lg p-4 md:hidden"
            >
              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                  className="block py-3 text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {navItem.name}
                </a>
              ))}
              <Button size="sm" className="btn-minimal w-full mt-3 h-9">
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
