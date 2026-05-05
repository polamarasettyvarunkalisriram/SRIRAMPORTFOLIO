import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between px-5 md:px-6 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full py-2.5 shadow-[var(--shadow-card)] mx-4 md:mx-auto"
            : "py-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-[hsl(140_80%_50%)] pulse-dot" />
          <span>pvk<span className="text-[hsl(var(--violet))]">.</span>sriram</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
