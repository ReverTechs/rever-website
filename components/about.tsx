"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  Award,
  Users,
  Clock,
  Target
} from "lucide-react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React/Next.js", level: 95, icon: Code },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "Node.js", level: 85, icon: Database },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Mobile Development", level: 80, icon: Smartphone },
    { name: "Cloud Services", level: 75, icon: Globe },
  ];

  const achievements = [
    { icon: Award, title: "5+ Years Experience", description: "Building scalable web applications" },
    { icon: Users, title: "50+ Projects", description: "Successfully delivered to clients" },
    { icon: Clock, title: "24/7 Support", description: "Always available for my clients" },
    { icon: Target, title: "100% Success Rate", description: "Projects completed on time" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions 
              that make a difference in people's lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <Card className="p-8 h-full">
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">My Story</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate full-stack developer with over 5 years of experience 
                      creating digital solutions that bridge the gap between design and functionality. 
                      My journey began with a curiosity for how things work, which led me to 
                      discover the world of programming.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in modern web technologies and have a keen eye for design. 
                      I believe in writing clean, maintainable code and creating user experiences 
                      that are both beautiful and functional.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">What I Do</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm">Fast Development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Palette className="h-5 w-5 text-primary" />
                        <span className="text-sm">Beautiful Design</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Database className="h-5 w-5 text-primary" />
                        <span className="text-sm">Scalable Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <span className="text-sm">Global Reach</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Skills & Stats */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {/* Skills */}
              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="h-4 w-4 text-primary" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 delay-500"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={achievement.title}
                    className={`p-4 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <CardContent className="text-center space-y-2">
                      <achievement.icon className="h-8 w-8 text-primary mx-auto" />
                      <h4 className="font-bold text-lg">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div
            className={`mt-16 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
                "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS", "Figma",
                "React Native", "Express.js", "Prisma", "Supabase", "Vercel"
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
