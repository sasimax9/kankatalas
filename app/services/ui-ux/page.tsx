"use client"

import { useState, useEffect } from "react"
import { FloatingNav } from "@/components/floating-navbar"
import { TracingBeam } from "@/components/tracing-beam"
import { FooterNavigation } from "@/components/footer-navigation"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { LightEffects } from "@/components/light-effects"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers, Smartphone, Monitor, Palette, CheckCircle, Users, Zap, Eye, ArrowLeft } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

export default function UIUXServicePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      document.documentElement.style.setProperty("--scroll-y", window.scrollY.toString())
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", link: "/#services" },
    { name: "Expertise", link: "/#expertise" },
    { name: "About", link: "/#about" },
    { name: "Contact", link: "/#contact" },
  ]

  return (
    <div className="min-h-screen bg-background relative beam-bg">
      <LightEffects />
      <ThemeSwitcher />
      <FloatingNav navItems={navItems} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background parallax-slow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-6 relative z-10 parallax-medium"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Badge
            variant="secondary"
            className="mb-4 bg-foreground/5 text-foreground/70 border-foreground/10 hover:bg-foreground/10 text-xs px-3 py-1 animate-glow"
          >
            <Layers className="w-3 h-3 mr-1.5" />
            UI/UX Design & Development
          </Badge>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
            Beautiful Interfaces that <span className="text-foreground/60">Users Love</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create exceptional user experiences with modern design principles, responsive layouts, and intuitive
            interactions that drive engagement and conversions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-minimal h-10 text-sm px-5">
              Start Design Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </section>

      <TracingBeam className="px-6">
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 tracking-tight">
                Our Design & Development Services
              </h2>
              <p className="text-base text-foreground/60 max-w-xl mx-auto">
                End-to-end design and development solutions for web and mobile applications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "UX Research & Strategy",
                  description: "User research, personas, and strategic design planning for optimal experiences.",
                  features: ["User Research", "Persona Development", "Journey Mapping", "Usability Testing"],
                  image: "/ux-research-user-journey-mapping-process.jpg",
                },
                {
                  icon: Palette,
                  title: "Visual Design",
                  description: "Beautiful, modern interfaces that align with your brand and engage users.",
                  features: ["Brand Identity", "Visual Systems", "Icon Design", "Illustration"],
                  image: "/modern-ui-design-system-with-components.jpg",
                },
                {
                  icon: Monitor,
                  title: "Web Development",
                  description: "Responsive, fast-loading websites built with modern technologies.",
                  features: ["React/Next.js", "Responsive Design", "Performance Optimization", "SEO Ready"],
                  image: "/responsive-web-development-multiple-devices.jpg",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Design",
                  description: "Native and cross-platform mobile applications with intuitive interfaces.",
                  features: ["iOS Design", "Android Design", "Cross-platform", "App Store Optimization"],
                  image: "/mobile-app-design-interface-mockups.jpg",
                },
                {
                  icon: Zap,
                  title: "Prototyping",
                  description: "Interactive prototypes to validate concepts before development.",
                  features: ["Wireframing", "Interactive Prototypes", "Design Systems", "Component Libraries"],
                  image: "/interactive-prototype-design-process.jpg",
                },
                {
                  icon: Users,
                  title: "User Testing",
                  description: "Comprehensive testing to ensure optimal user experience and usability.",
                  features: ["A/B Testing", "User Feedback", "Analytics Integration", "Conversion Optimization"],
                  image: "/user-testing-session-with-feedback-analysis.jpg",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group macbook-hover glass-minimal border-foreground/5 overflow-hidden h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg?height=160&width=400&query=UI UX design"}
                        alt={service.title}
                        className="w-full h-full object-cover smooth-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{service.title}</CardTitle>
                      <CardDescription className="text-foreground/60 leading-relaxed text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-foreground/[0.02]">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 tracking-tight">
                  Design That Drives Results
                </h2>
                <p className="text-base text-foreground/60 mb-8 leading-relaxed">
                  Our design process combines user research, modern aesthetics, and technical excellence to create
                  interfaces that not only look great but perform exceptionally.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "User-Centered Approach",
                      description: "Every design decision is backed by user research and testing",
                    },
                    {
                      title: "Modern Technologies",
                      description: "Built with React, Next.js, and the latest web standards",
                    },
                    {
                      title: "Performance Focused",
                      description: "Optimized for speed, accessibility, and search engines",
                    },
                    {
                      title: "Scalable Systems",
                      description: "Design systems that grow with your business needs",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm mb-1">{benefit.title}</h3>
                        <p className="text-foreground/60 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="/design-team-creating-user-interfaces.jpg"
                  alt="Design team at work"
                  className="w-full h-80 object-cover rounded-lg macbook-hover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 tracking-tight">
                Ready to Create Amazing User Experiences?
              </h2>
              <p className="text-base text-foreground/60 mb-8 leading-relaxed">
                Let's design and build interfaces that your users will love and your business will benefit from.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="btn-minimal h-10 text-sm px-5">
                  Start Design Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </TracingBeam>

      <FooterNavigation />
    </div>
  )
}
