import { MessageCircle, Phone, BookOpen, Sparkles, Award } from "lucide-react";
import heroBg from "@/assets/hero-students.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
          style={{ filter: "blur(2px)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.4 0.22 287 / 0.88) 0%, oklch(0.5 0.22 290 / 0.82) 50%, oklch(0.55 0.22 287 / 0.78) 100%)",
          }}
        />
      </div>

      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -left-10 top-20 hidden h-20 w-20 items-center justify-center rounded-2xl bg-white/70 shadow-[var(--shadow-card)] md:flex">
          <BookOpen className="h-9 w-9 text-primary" />
        </div>
        <div
          className="animate-float absolute right-8 top-32 hidden h-16 w-16 items-center justify-center rounded-2xl bg-white/70 shadow-[var(--shadow-card)] md:flex"
          style={{ animationDelay: "1.2s" }}
        >
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <div
          className="animate-float absolute bottom-16 left-1/4 hidden h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-[var(--shadow-card)] md:flex"
          style={{ animationDelay: "2.4s" }}
        >
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-32">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" />
          තිස්සමහාරාම • ශ්‍රී ලංකා
        </div>
        <h1
          className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          ඔබගේ දරුවාගේ අනාගතය{" "}
          <span className="text-white">අප සමඟ ගොඩනඟන්න</span>
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          ISE SE අධ්‍යාපන ආයතනය තිස්සමහාරාම – ගුණාත්මක අධ්‍යාපනයෙන් සාර්ථකත්වයට මඟ පෙන්වීම.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://wa.me/94770000000"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:bg-primary-hover"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Contact
          </a>
          <a
            href="tel:+94770000000"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-7 text-sm font-semibold text-primary transition-all hover:bg-primary-soft"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>

        <div className="animate-fade-up mt-14 grid grid-cols-3 gap-4 md:gap-8" style={{ animationDelay: "0.4s" }}>
          {[
            { n: "500+", l: "සිසුන්" },
            { n: "15+", l: "ගුරුවරුන්" },
            { n: "10+", l: "වසරක අත්දැකීම්" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/70 p-4 shadow-[var(--shadow-card)] backdrop-blur md:p-6">
              <div className="text-2xl font-extrabold text-primary md:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
