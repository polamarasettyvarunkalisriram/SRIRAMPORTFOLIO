import { GraduationCap, MapPin, Mail, Languages } from "lucide-react";
import SectionTitle from "./SectionTitle";

const facts = [
  { icon: GraduationCap, label: "B.Tech CSE · 8.3 GPA", sub: "Vignan’s Institute of IT, 2020–2024" },
  { icon: MapPin, label: "Hyderabad, India", sub: "Open to remote & relocation" },
  { icon: Languages, label: "Clear English communication", sub: "Comfortable in client-facing settings" },
  { icon: Mail, label: "srirampksrirampk@gmail.com", sub: "Replies within 24 hours" },
];

const About = () => {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="About"
            title="A learner who"
            highlight="ships."
          />

          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm an aspiring{" "}
            <span className="text-foreground font-medium">Data Analyst</span> with strong analytical
            skills, hands-on Excel and Power BI experience, and a foundation in full-stack
            development.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            I'm passionate about continuous learning and using data to support smart business
            decisions — whether that means a clean dashboard, a faster query, or a better UI.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="card-hover rounded-2xl border border-border bg-card p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-[hsl(var(--violet))]">
                <f.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-medium">{f.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
