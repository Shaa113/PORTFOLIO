import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SkillsMarquee } from "./components/SkillsMarquee";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { WorkProcess } from "./components/WorkProcess";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PageLoader } from "./components/PageLoader";
import { AIExperience } from "./components/AIExperience";
import Plasma from "./components/Plasma";
import { SmoothScroll } from "./components/SmoothScroll";
import { GSAPAnimations } from "./components/GSAPAnimations";

export default function App() {
  const [isAIMode, setIsAIMode] = useState(() => window.location.hash === "#ai");

  useEffect(() => {
    const syncMode = () => setIsAIMode(window.location.hash === "#ai");
    window.addEventListener("hashchange", syncMode);
    return () => window.removeEventListener("hashchange", syncMode);
  }, []);

  if (isAIMode) {
    return <AIExperience onExit={() => { window.location.hash = ""; }} />;
  }

  return (
    <SmoothScroll>
      <PageLoader />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Plasma 
          color="#f4b797"
          speed={0.6}
          direction="reverse"
          scale={1.5}
          opacity={0.7}
          mouseInteractive={true}
        />
      </div>

      <div className="min-h-screen bg-transparent overflow-x-hidden relative z-10">
        <Navigation />

        <main>
          <section id="home" className="relative overflow-hidden">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <SkillsMarquee />
          </section>

          <section id="projects">
            <ProjectShowcase />
          </section>

          <section id="process">
            <WorkProcess />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>

      {/* GSAP ScrollTrigger animations ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â mounts after DOM is ready */}
      <GSAPAnimations />
    </SmoothScroll>
  );
}
