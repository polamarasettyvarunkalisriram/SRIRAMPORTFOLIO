import { ArrowUpRight, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    n: "01",
    title: "Expense Tracker",
    tag: "Full-Stack · Finance",
    desc: "A clean expense tracking app to log income/expenses, categorize transactions, and visualize monthly spending with charts. Auth-protected with persistent storage.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    accent: "from-[hsl(var(--violet))] to-[hsl(var(--pink))]",
    github: "https://github.com/polamarasettyvarunkalisriram/Expense-tracker",
    live: "https://expense-tracker-ecru-five-ru65gjt19j.vercel.app/",
  },
  {
    n: "02",
    title: "TaskWave",
    tag: "MERN · Productivity",
    desc: "Full-stack task manager with JWT + bcrypt authentication, RESTful APIs via Axios, and a responsive React UI for create, edit, delete, and complete flows.",
    stack: ["MongoDB", "Express", "React", "Node", "JWT"],
    accent: "from-[hsl(var(--cyan))] to-[hsl(var(--violet))]",
    github: "https://github.com/polamarasettyvarunkalisriram",
    live: "#",
  },
  {
    n: "03",
    title: "Smato Apps — ERP Suite",
    tag: "Enterprise · Modules",
    desc: "Built ERP modules — HR, CRM, Books, E-commerce — with reusable components, REST integration, and complex business logic across React, Angular & Node.",
    stack: ["React", "Angular", "Node", "Express", "MongoDB"],
    accent: "from-[hsl(var(--pink))] to-[hsl(var(--cyan))]",
    github: "https://github.com/polamarasettyvarunkalisriram",
    live: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="px-5 md:px-8 py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that shipped, "
          highlight="not just demos."
          description="A few things I've built end-to-end — from data layer to UI."
        />

        <div className="grid gap-5 md:gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.n}
              className={`card-hover group relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10 grid md:grid-cols-12 gap-6 ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Glow strip */}
              <div
                className={`absolute -inset-x-20 -top-20 h-40 rounded-full bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}
              />

              <div className="md:col-span-7 flex flex-col gap-4 relative">
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="text-[hsl(var(--violet))]">// {p.n}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="uppercase tracking-[0.2em]">{p.tag}</span>
                </div>

                <h3 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
                  {p.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-xl">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border bg-secondary/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-3">
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90"
                    >
                      Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-[hsl(var(--violet))]"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>

              {/* Visual block — terminal preview */}
              <div className="md:col-span-5 relative">
                <div className="rounded-2xl border border-border bg-[hsl(var(--surface-2))] overflow-hidden h-full min-h-[220px] flex flex-col">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-[10px] font-mono text-muted-foreground">
                      ~/projects/{p.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>
                  <div className="p-5 font-mono text-xs leading-relaxed flex-1 space-y-2">
                    <div className="text-muted-foreground">$ npm run start</div>
                    <div className="text-[hsl(var(--cyan))]">→ compiled successfully</div>
                    <div className="text-muted-foreground">$ ls features/</div>
                    {p.stack.slice(0, 3).map((s) => (
                      <div key={s} className="text-foreground">
                        <span className="text-[hsl(var(--violet))]">▸</span> {s.toLowerCase()}.module
                      </div>
                    ))}
                    <div className="text-[hsl(var(--pink))] pt-2 shine bg-clip-text">
                      ✓ {p.title} ready
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
