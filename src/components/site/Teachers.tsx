import { GraduationCap } from "lucide-react";

const teachers = [
  { name: "ආචාර්ය සමන් කුමාර", qualification: "BSc (Hons), Dip. in Education", subject: "සිංහල භාෂාව", initials: "සක" },
  { name: "නිමල් පෙරේරා මහතා", qualification: "BSc Mathematics", subject: "ගණිතය", initials: "නප" },
  { name: "කුමාරි සිල්වා මෙය", qualification: "BA English, PGDE", subject: "ඉංග්‍රීසි", initials: "කස" },
  { name: "අනුර ජයසිංහ මහතා", qualification: "BSc Physics", subject: "භෞතික විද්‍යාව", initials: "අජ" },
  { name: "චමරි රත්නායක මෙය", qualification: "BSc Chemistry", subject: "රසායන විද්‍යාව", initials: "චර" },
  { name: "රවී ද සිල්වා මහතා", qualification: "BA, Dip. in Teaching", subject: "ඉතිහාසය", initials: "රද" },
];

const palette = [
  "from-[oklch(0.55_0.22_287)] to-[oklch(0.68_0.18_295)]",
  "from-[oklch(0.6_0.2_310)] to-[oklch(0.7_0.16_300)]",
  "from-[oklch(0.5_0.22_280)] to-[oklch(0.62_0.2_290)]",
];

export function Teachers() {
  return (
    <section id="teachers" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
            අපගේ ගුරුවරුන්
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            පළපුරුදු ආචාර්ය මණ්ඩලය
          </h2>
          <p className="mt-3 text-muted-foreground">අපගේ සිසුන්ට හොඳම අධ්‍යාපනය ලබාදෙන ගුරුවරුන්</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <div
              key={t.name}
              className="group rounded-3xl border-2 border-transparent bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${palette[i % palette.length]} text-lg font-bold text-primary-foreground shadow-[var(--shadow-soft)]`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm font-medium text-primary">{t.subject}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{t.qualification}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
