import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Work from "@/components/portfolio/Work";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
