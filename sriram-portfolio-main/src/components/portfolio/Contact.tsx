import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { toast } from "sonner";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "srirampksrirampk@gmail.com",
    href: "mailto:srirampksrirampk@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93981 71713", href: "tel:+919398171713" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/pvksriram" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/pvksriram" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Hello Sriram"));
    const body = encodeURIComponent(
      `Hi Sriram,\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    setSending(true);
    setTimeout(() => {
      window.location.href = `mailto:srirampksrirampk@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setSending(false);
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" className="px-5 md:px-8 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let’s build something "
          highlight="together."
          description="I’m actively looking for Data Analyst and Full-Stack roles. Reach out — I reply quickly."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card-hover group flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[hsl(var(--violet))] group-hover:bg-gradient-to-br group-hover:from-[hsl(var(--violet))] group-hover:to-[hsl(var(--pink))] group-hover:text-background transition-all">
                  <c.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="font-medium break-all">{c.value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 card-hover inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-medium"
                >
                  <s.icon className="w-4 h-4" /> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-6">Send me a message</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field name="name" label="Name" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@company.com" />
            </div>
            <div className="mb-4">
              <Field name="subject" label="Subject" placeholder="Role / Project / Question" />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or what you’re building…"
                className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--violet))] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sending ? "Opening…" : "Send message"}
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} — Pvk Sriram. Crafted with care.</span>
          <span>Hyderabad · India</span>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--violet))] transition-colors"
    />
  </div>
);

export default Contact;
