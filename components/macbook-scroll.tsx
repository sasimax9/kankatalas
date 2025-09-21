"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function MacBookScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      document.documentElement.style.setProperty("--scroll-y", scrollY.toString())
    }

    // MacBook-style smooth scroll handling
    const smoothScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", smoothScroll, { passive: true })
    return () => window.removeEventListener("scroll", smoothScroll)
  }, [scrollY])

  return <>{children}</>
}
