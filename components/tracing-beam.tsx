"use client"
import { useRef, useEffect, useState } from "react"
import type React from "react"

import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  })

  const dotY = useTransform(scrollYProgress, [0, 1], [0, svgHeight - 50])

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setSvgHeight(ref.current.getBoundingClientRect().height)
      }
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          style={{ y: dotY }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "0 0 20px var(--glow-yellow)" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-border shadow-sm flex items-center justify-center relative z-10"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "var(--primary)" : "var(--primary)",
              borderColor: scrollYProgress.get() > 0 ? "var(--primary)" : "var(--primary)",
              boxShadow: scrollYProgress.get() > 0 ? "0 0 10px var(--glow-yellow)" : "none",
            }}
            className="h-2 w-2 rounded-full border border-primary bg-primary animate-glow"
          />
        </motion.div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${svgHeight} l -18 24`}
            fill="none"
            stroke="var(--border)"
            strokeOpacity="0.3"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${svgHeight} l -18 24`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
            style={{
              pathLength,
            }}
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={pathLength} y2="0">
              <stop stopColor="var(--primary)" stopOpacity="0" />
              <stop stopColor="var(--primary)" />
              <stop offset="0.325" stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  )
}
