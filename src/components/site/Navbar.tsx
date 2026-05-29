import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { href: "#home", label: "මුල් පිටුව" },
  { href: "#about", label: "අප ගැන" },
  { href: "#teachers", label: "ගුරුවරුන්" },
  { href: "#timetable", label: "කාලසටහන" },
  { href: "#contact", label: "සම්බන්ධවන්න" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground">ISE SE</div>
            <div className="text-[11px] text-muted-foreground">අධ්‍යාපන ආයතනය</div>
          </div>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/94770000000"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary-hover md:inline-flex"
        >
          WhatsApp
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/94770000000"
                className="block rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                WhatsApp සම්බන්ධතාව
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
