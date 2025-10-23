"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Blessings Chilemba
            </span>
          </h1>

          {/* Title */}
          <div
            className={`text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-medium">Full-Stack Developer</span>
            <span className="mx-4 text-primary">•</span>
            <span className="font-medium">UI/UX Designer</span>
            <span className="mx-4 text-primary">•</span>
            <span className="font-medium">Tech Innovator</span>
          </div>

          {/* Description */}
          <p
            className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I craft exceptional digital experiences through innovative web applications, 
            combining cutting-edge technology with beautiful design to solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("#about")}
          className="group"
        >
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
