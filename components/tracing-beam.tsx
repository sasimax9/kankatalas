"use client"
import { useRef } from "react"
import type React from "react"

import { motion, useScroll, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "var(--emerald-500, #10b981)",
              borderColor: scrollYProgress.get() > 0 ? "white" : "var(--emerald-600, #059669)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${ref.current?.getBoundingClientRect()?.height ?? 0}`}
          width="20"
          height={ref.current?.getBoundingClientRect()?.height ?? 0}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${ref.current?.getBoundingClientRect()?.height ?? 0} l -18 24`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${ref.current?.getBoundingClientRect()?.height ?? 0} l -18 24`}
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
          ></motion.path>
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={pathLength} y2="0">
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#6344F5" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  )
}
