import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-full border border-border hover:border-[hsl(var(--violet))] flex items-center justify-center transition-colors"
    >
      {light ? <Moon className="w-4 h-4" strokeWidth={1.75} /> : <Sun className="w-4 h-4" strokeWidth={1.75} />}
    </button>
  );
};

export default ThemeToggle;
