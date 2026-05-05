import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import photo from "@/assets/sriram-photo.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-5 md:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Aurora + grid backdrop */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--violet))]" />
            <span className="text-muted-foreground">Open to Data Analyst & Full-Stack roles</span>
          </div>

          <h1 className="font-serif leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance">
            Hi, I’m{" "}
            <span className="text-gradient italic">Pvk Sriram</span>
            <span className="text-[hsl(var(--violet))]">.</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              I build with code,
              <br />
              think in <em className="text-foreground">data</em>.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Computer Science graduate from VIIT (8.3 GPA). Aspiring Data Analyst with hands-on
            experience across the MERN stack, Python, Power BI, and PL/SQL. I love turning messy
            problems into clean, useful products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm"
            >
              <span>Let’s connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/Pvk-Sriram-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-[hsl(var(--violet))] text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <div className="flex items-center gap-4 ml-2 pl-4 border-l border-border text-xs font-mono text-muted-foreground">
              <div>
                <div className="text-foreground text-base font-semibold">8.3</div>
                <div>GPA</div>
              </div>
              <div>
                <div className="text-foreground text-base font-semibold">3+</div>
                <div>Projects</div>
              </div>
              <div>
                <div className="text-foreground text-base font-semibold">10+</div>
                <div>Tech</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — photo card */}
        <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative max-w-[420px] mx-auto">
            {/* Glow */}
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-60 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />

            {/* Floating tags */}
            <div className="absolute -top-4 -left-4 z-20 glass rounded-full px-4 py-2 text-xs font-mono float">
              <span className="text-[hsl(var(--violet))]">●</span> Available 2026
            </div>
            <div
              className="absolute -bottom-4 -right-4 z-20 glass rounded-2xl px-4 py-3 float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-xs text-muted-foreground font-mono">Based in</div>
              <div className="text-sm font-semibold">Hyderabad, IN</div>
            </div>

            {/* Photo */}
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card aspect-square">
              <img
                src={photo}
                alt="Pvk Sriram"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
