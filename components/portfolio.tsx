"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Palette,
  Database,
  Smartphone,
  Globe
} from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("portfolio");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      icon: Globe
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      icon: Code
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "TypeScript", "Firebase", "Node.js", "JWT"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      icon: Smartphone
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization with real-time charts, filtering, and export capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      icon: Database
    },
    {
      id: 5,
      title: "UI Design System",
      description: "A comprehensive design system with reusable components, documentation, and design tokens.",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "Storybook", "React", "TypeScript", "Tailwind"],
      category: "design",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      icon: Palette
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by AI with natural language processing and context awareness.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI", "Python", "FastAPI", "Redis"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      icon: Globe
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "Design" }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="transition-all duration-200"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div
            className={`mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <Card
                    key={project.id}
                    className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="h-16 w-16 text-primary/50" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/80">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="relative h-40 bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
