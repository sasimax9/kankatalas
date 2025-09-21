"use client"

import { useState } from "react"
import { FloatingNav } from "@/components/floating-navbar"
import { TracingBeam } from "@/components/tracing-beam"
import { FooterNavigation } from "@/components/footer-navigation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Code, Database, Layers, Zap, Users, Sparkles, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
import { translations, type Language } from "@/lib/i18n"

export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const t = translations[currentLanguage]

  const navItems = [
    { name: t.nav.services, link: "#services" },
    { name: t.nav.expertise, link: "#expertise" },
    { name: t.nav.about, link: "#about" },
    { name: t.nav.contact, link: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      </div>

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background parallax-slow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-6 relative z-10 parallax-medium"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-foreground/5 text-foreground/70 border-foreground/10 hover:bg-foreground/10 text-xs px-3 py-1"
          >
            <Sparkles className="w-3 h-3 mr-1.5" />
            {t.hero.badge}
          </Badge>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
            {t.hero.title} <span className="text-foreground/60">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-minimal h-10 text-sm px-5">
              {t.hero.startProject}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
              {t.hero.viewWork}
            </Button>
          </div>
        </motion.div>
      </section>

      <TracingBeam className="px-6">
        <section id="services" className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 tracking-tight">{t.services.title}</h2>
              <p className="text-base text-foreground/60 max-w-xl mx-auto">{t.services.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Brain,
                  title: t.services.aiMl.title,
                  description: t.services.aiMl.description,
                  badges: ["TensorFlow", "PyTorch", "OpenAI"],
                  image: "/ai-neural-network-visualization-with-glowing-nodes.jpg",
                },
                {
                  icon: Layers,
                  title: t.services.uiUx.title,
                  description: t.services.uiUx.description,
                  badges: ["React", "Next.js", "Tailwind CSS"],
                  image: "/modern-ui-design-mockup-with-clean-interface.jpg",
                },
                {
                  icon: Database,
                  title: t.services.dataEng.title,
                  description: t.services.dataEng.description,
                  badges: ["Apache Spark", "PostgreSQL", "MongoDB"],
                  image: "/data-pipeline-visualization-with-flowing-connectio.jpg",
                },
                {
                  icon: Zap,
                  title: t.services.llm.title,
                  description: t.services.llm.description,
                  badges: ["GPT-4", "Claude", "Llama"],
                  image: "/language-model-conversation-interface-with-chat-bu.jpg",
                },
                {
                  icon: Code,
                  title: t.services.python.title,
                  description: t.services.python.description,
                  badges: ["Django", "FastAPI", "Flask"],
                  image: "/python-code-editor-with-syntax-highlighting.jpg",
                },
                {
                  icon: Users,
                  title: t.services.consulting.title,
                  description: t.services.consulting.description,
                  badges: ["Architecture", "DevOps", "Cloud"],
                  image: "/business-strategy-diagram-with-connected-elements.jpg",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group macbook-hover glass-minimal border-foreground/5 overflow-hidden h-full">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover smooth-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <div className="w-7 h-7 bg-foreground/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-3.5 h-3.5 text-foreground" />
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
                      <div className="flex flex-wrap gap-1">
                        {service.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            variant="secondary"
                            className="bg-foreground/5 text-foreground/70 border-foreground/10 text-xs px-2 py-0.5"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="py-20 md:py-24 bg-foreground/[0.02]">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="parallax-fast"
              >
                <h2 className="mb-6">Trusted by industry leaders.</h2>
                <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                  {
                    "We partner with forward-thinking companies to build intelligent software solutions that drive innovation and growth."
                  }
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    "Discovery & Strategy Planning",
                    "Custom Solution Development",
                    "Testing & Quality Assurance",
                    "Deployment & Ongoing Support",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                      <span className="text-foreground/80">{step}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "50+", label: "Projects Delivered" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "5+", label: "Years Experience" },
                    { number: "24/7", label: "Support Available" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-medium mb-1">{stat.number}</div>
                      <div className="text-foreground/60 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative parallax-medium"
              >
                <img
                  src="/modern-tech-team-working-on-ai-projects-with-holog.jpg"
                  alt="Tech team collaboration"
                  className="w-full h-80 object-cover rounded-lg macbook-hover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="parallax-medium"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 tracking-tight">{t.about.title}</h2>
              <p className="text-base text-foreground/60 mb-8 leading-relaxed">{t.about.description}</p>
              <img
                src="/professional-tech-team-in-modern-office-with-ai-di.jpg"
                alt="kankatalas team"
                className="w-full h-56 object-cover rounded-lg macbook-hover"
              />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 bg-foreground/[0.02]">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="parallax-medium"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 tracking-tight">{t.contact.title}</h2>
              <p className="text-base text-foreground/60 mb-8">{t.contact.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="btn-minimal h-10 text-sm px-5">
                  {t.contact.schedule}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="btn-outline-minimal h-10 text-sm px-5 bg-transparent">
                  {t.contact.viewCases}
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
