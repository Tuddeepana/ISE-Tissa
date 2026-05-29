import { Target, Heart, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
            අප ගැන
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            විශ්වාසදායී අධ්‍යාපන හවුල්කරුවා
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-8 shadow-[var(--shadow-card)] md:col-span-3 md:p-10">
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              ISE SE අධ්‍යාපන ආයතනය තිස්සමහාරාම යනු දරුවන්ගේ අධ්‍යාපනික හැකියාවන් වර්ධනය කර
              සාර්ථක අනාගතයක් සඳහා මඟ පෙන්වන විශ්වාසදායී අධ්‍යාපන ආයතනයකි.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              අපගේ අරමුණ වන්නේ සිසුන්ට විභාග ජයග්‍රහණය සඳහා අවශ්‍ය දැනුම, පුහුණුව සහ විශ්වාසය
              ලබාදීමයි.
            </p>
          </div>

          <div className="grid gap-4 md:col-span-2">
            {[
              { icon: Target, title: "පැහැදිලි අරමුණු", desc: "විභාග කේන්ද්‍රීය පුහුණුව" },
              { icon: Heart, title: "කැපවීම", desc: "සිසුන් වෙනුවෙන් සියලු දේ" },
              { icon: Trophy, title: "සාර්ථකත්වය", desc: "ඔප්පු කළ ප්‍රතිඵල" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
