import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-8 text-center shadow-[var(--shadow-card)] md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-whatsapp)] text-white shadow-[var(--shadow-soft)]">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-2xl font-extrabold text-foreground md:text-4xl">
              අදම අප සමඟ WhatsApp හරහා සම්බන්ධ වන්න
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              පන්ති ලියාපදිංචිය, විමසීම් සහ විස්තර සඳහා දැන්ම පණිවිඩයක් යවන්න.
            </p>
            <a
              href="https://wa.me/94770000000"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-8 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Chat ආරම්භ කරන්න
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
