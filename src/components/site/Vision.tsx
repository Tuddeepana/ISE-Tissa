import { Sparkles } from "lucide-react";

export function Vision() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--gradient-primary)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          අපගේ දැක්ම
        </div>
        <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          “දැනුමෙන් සවිබලවත්, සාර්ථක අනාගතයක් ගොඩනගන ප්‍රමුඛ අධ්‍යාපන ආයතනය වීම.”
        </h2>
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-white/60" />
      </div>
    </section>
  );
}
