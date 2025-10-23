"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "reverbc.dev@yahoo.com",
      href: "mailto:reverbc.dev@yahoo.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0 (+265) 984 6716 70",
      href: "tel:+265984671670"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lilongwe, Malawi",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/revertechs",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className={`transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 group hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-200 group ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      } ${social.color}`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <Card
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">
                      <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Available for Work</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently accepting new projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Card className="p-8">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            required
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Write your message..."
                          required
                          rows={6}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Prefer a Quick Chat?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Sometimes a quick conversation is all you need to get started. 
                  I'm available for a 15-minute discovery call to discuss your project.
                </p>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
