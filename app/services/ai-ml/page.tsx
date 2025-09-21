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
import { ArrowRight, Brain, Cpu, Database, CheckCircle, TrendingUp, BarChart3, Bot, ArrowLeft } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

export default function AIMLServicePage() {
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
            <Brain className="w-3 h-3 mr-1.5" />
            AI & Machine Learning
          </Badge>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
            Intelligent Solutions for <span className="text-foreground/60">Modern Business</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your business with custom AI models, machine learning pipelines, and intelligent automation
            solutions that deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-minimal h-10 text-sm px-5">
              Start Your AI Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
              View Case Studies
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 tracking-tight">Our AI & ML Services</h2>
              <p className="text-base text-foreground/60 max-w-xl mx-auto">
                Comprehensive artificial intelligence solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Custom AI Models",
                  description: "Tailored machine learning models for your specific use cases and data.",
                  features: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP Processing"],
                  image: "/ai-neural-network-brain-with-data-connections.jpg",
                },
                {
                  icon: Bot,
                  title: "Intelligent Automation",
                  description: "Automate complex business processes with AI-powered decision making.",
                  features: ["Process Automation", "Decision Trees", "Workflow Optimization", "Smart Routing"],
                  image: "/robotic-process-automation-with-ai-integration.jpg",
                },
                {
                  icon: BarChart3,
                  title: "Predictive Analytics",
                  description: "Forecast trends and make data-driven decisions with advanced analytics.",
                  features: ["Time Series Analysis", "Demand Forecasting", "Risk Assessment", "Market Prediction"],
                  image: "/predictive-analytics-dashboard-with-charts.jpg",
                },
                {
                  icon: Cpu,
                  title: "MLOps & Deployment",
                  description: "End-to-end machine learning operations and model deployment solutions.",
                  features: ["Model Deployment", "Performance Monitoring", "A/B Testing", "Continuous Learning"],
                  image: "/machine-learning-operations-pipeline-diagram.jpg",
                },
                {
                  icon: Database,
                  title: "Data Engineering",
                  description: "Build robust data pipelines and infrastructure for AI applications.",
                  features: ["Data Pipelines", "Feature Engineering", "Data Quality", "Real-time Processing"],
                  image: "/data-engineering-pipeline-with-ai-components.jpg",
                },
                {
                  icon: TrendingUp,
                  title: "AI Strategy Consulting",
                  description: "Strategic guidance on AI adoption and implementation roadmaps.",
                  features: ["AI Readiness Assessment", "Technology Selection", "ROI Planning", "Team Training"],
                  image: "/ai-strategy-consulting-meeting-with-charts.jpg",
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
                        src={service.image || "/placeholder.svg?height=160&width=400&query=AI technology"}
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
                  Why Choose Our AI Solutions?
                </h2>
                <p className="text-base text-foreground/60 mb-8 leading-relaxed">
                  We combine cutting-edge AI technology with deep business understanding to deliver solutions that drive
                  real value.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Proven Track Record",
                      description: "Successfully deployed 50+ AI models in production environments",
                    },
                    {
                      title: "Industry Expertise",
                      description: "Deep knowledge across healthcare, finance, retail, and manufacturing",
                    },
                    {
                      title: "Scalable Solutions",
                      description: "Built for growth with cloud-native architecture and MLOps best practices",
                    },
                    {
                      title: "Ongoing Support",
                      description: "Continuous monitoring, optimization, and model retraining services",
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
                  src="/ai-team-developing-machine-learning-models.jpg"
                  alt="AI development team"
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-base text-foreground/60 mb-8 leading-relaxed">
                Let's discuss how artificial intelligence can drive growth and efficiency in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="btn-minimal h-10 text-sm px-5">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
                  Download AI Guide
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
