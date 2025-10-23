import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      
      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 bg-muted/30">
        <p className="text-muted-foreground">
          © 2024 Blessings Chilemba. All rights reserved.
        </p>
        <ThemeSwitcher />
      </footer>
    </main>
  );
}
