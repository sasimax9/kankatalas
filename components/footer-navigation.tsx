"use client"
import { Code, Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export const FooterNavigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/40 py-16 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Kankatalas
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building intelligent software solutions with cutting-edge AI/ML, modern UI/UX, and scalable architecture.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "AI & Machine Learning", href: "#services" },
                { name: "UI/UX Design", href: "#services" },
                { name: "Data Engineering", href: "#services" },
                { name: "Python Development", href: "#services" },
                { name: "LLM Integration", href: "#services" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#about" },
                { name: "Careers", href: "#contact" },
                { name: "Case Studies", href: "#expertise" },
                { name: "Blog", href: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">info@kankatalas.org</li>
              <li className="text-muted-foreground">+91 (889) 739-0906</li>
              <li className="text-muted-foreground">Hyderabad, Telangana</li>
            </ul>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-transparent border-border hover:bg-primary/10 hover:border-primary/50"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Kankatalas. All rights reserved. Building the future with intelligent software.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
