import SectionTitle from "./SectionTitle";

const items = [
  {
    when: "2024 — Present",
    company: "Smato Apps",
    role: "Full-Stack Developer",
    where: "Hyderabad, IN",
    desc: "Building ERP modules — HR, CRM, Books, E-commerce — with reusable components, REST integration, and complex business logic across React, Angular & Node.",
    tags: ["React", "Angular", "Node.js", "MongoDB"],
  },
  {
    when: "2023 — 2024",
    company: "Personal & Freelance",
    role: "MERN Stack Developer",
    where: "Remote",
    desc: "Designed and shipped full-stack web apps end-to-end — secure auth, REST APIs, responsive UIs, and database modeling.",
    tags: ["MongoDB", "Express", "React", "Node", "JWT"],
  },
  {
    when: "2020 — 2024",
    company: "Vignan’s Institute of IT",
    role: "B.Tech, Computer Science",
    where: "GPA 8.3",
    desc: "Strong foundation in algorithms, databases, and software engineering. Graduated April 2024 with a capstone in multilingual data handling.",
    tags: ["DSA", "DBMS", "OOP", "Web"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-5 md:px-8 py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="Experience"
          title="My "
          highlight="journey."
        />

        <div className="relative pl-10 md:pl-14">
          {/* Vertical connector */}
          <div className="absolute left-[14px] md:left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--violet))] via-border to-transparent" />

          <div className="space-y-8">
            {items.map((it) => (
              <div key={it.role} className="relative">
                {/* Dot */}
                <div className="absolute -left-10 md:-left-14 top-5 flex items-center">
                  <span className="relative flex w-3.5 h-3.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--violet))] opacity-50 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[hsl(var(--violet))] ring-4 ring-background" />
                  </span>
                </div>

                {/* Card */}
                <article className="card-hover rounded-2xl border border-border bg-card p-5 md:p-6">
                  <div className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary text-muted-foreground mb-3">
                    {it.when}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                    {it.role}
                  </h3>
                  <div className="text-sm text-[hsl(var(--violet))] font-medium mt-1">
                    {it.company} <span className="text-muted-foreground">· {it.where}</span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-3">
                    {it.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
