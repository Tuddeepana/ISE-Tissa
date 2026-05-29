import { useMemo, useState } from "react";
import { Search, Clock, User, Calendar } from "lucide-react";

type ClassRow = {
  id: number;
  subject: string;
  grade: string;
  day: string;
  time: string;
  teacher: string;
};

const DAYS = ["සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා", "ඉරිදා"];
const DAY_INDEX: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };

const CLASSES: ClassRow[] = [
  { id: 1, subject: "සිංහල", grade: "10", day: "බදාදා", time: "10:30 PM", teacher: "ආචාර්ය සමන් කුමාර" },
  { id: 2, subject: "සිංහල", grade: "10", day: "සඳුදා", time: "6:00 PM", teacher: "ආචාර්ය සමන් කුමාර" },
  { id: 3, subject: "සිංහල", grade: "11", day: "සිකුරාදා", time: "4:00 PM", teacher: "ආචාර්ය සමන් කුමාර" },
  { id: 4, subject: "ගණිතය", grade: "10", day: "අඟහරුවාදා", time: "5:00 PM", teacher: "නිමල් පෙරේරා මහතා" },
  { id: 5, subject: "ඉංග්‍රීසි", grade: "11", day: "බ්‍රහස්පතින්දා", time: "5:30 PM", teacher: "කුමාරි සිල්වා මෙය" },
  { id: 6, subject: "භෞතික විද්‍යාව", grade: "12", day: "සෙනසුරාදා", time: "8:00 AM", teacher: "අනුර ජයසිංහ මහතා" },
  { id: 7, subject: "රසායන විද්‍යාව", grade: "12", day: "ඉරිදා", time: "10:00 AM", teacher: "චමරි රත්නායක මෙය" },
  { id: 8, subject: "ඉතිහාසය", grade: "10", day: "සිකුරාදා", time: "6:30 PM", teacher: "රවී ද සිල්වා මහතා" },
];

const todayKey = new Date().toLocaleDateString("en-US", { weekday: "short" }).slice(0, 3);
const todaySinhala = DAYS[DAY_INDEX[todayKey] ?? 0];

export function Timetable() {
  const [grade, setGrade] = useState("all");
  const [teacher, setTeacher] = useState("all");
  const [day, setDay] = useState("all");
  const [q, setQ] = useState("");

  const grades = useMemo(() => Array.from(new Set(CLASSES.map((c) => c.grade))), []);
  const teachers = useMemo(() => Array.from(new Set(CLASSES.map((c) => c.teacher))), []);

  const filtered = CLASSES.filter((c) => {
    if (grade !== "all" && c.grade !== grade) return false;
    if (teacher !== "all" && c.teacher !== teacher) return false;
    if (day !== "all" && c.day !== day) return false;
    if (q && !`${c.subject} ${c.teacher} ${c.grade}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="timetable" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
            පන්ති කාලසටහන
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            ඔබට ගැලපෙන පන්තිය සොයන්න
          </h2>
        </div>

        {/* Filters */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:p-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="විෂයය / ගුරුතුමා සොයන්න..."
              className="h-12 w-full rounded-xl border border-input bg-background pl-12 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FilterSelect label="ශ්‍රේණිය" value={grade} onChange={setGrade} options={grades.map((g) => ({ value: g, label: `Grade ${g}` }))} />
            <FilterSelect label="ගුරුතුමා" value={teacher} onChange={setTeacher} options={teachers.map((t) => ({ value: t, label: t }))} />
            <FilterSelect label="දිනය" value={day} onChange={setDay} options={DAYS.map((d) => ({ value: d, label: d }))} />
          </div>
        </div>

        {/* Results */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => {
            const isToday = c.day === todaySinhala;
            return (
              <div
                key={c.id}
                className={`relative rounded-2xl border-2 bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 ${
                  isToday ? "border-primary bg-primary-soft/40" : "border-border hover:border-primary/40"
                }`}
              >
                {isToday && (
                  <span className="absolute -top-2 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
                    අද
                  </span>
                )}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">Grade {c.grade}</div>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{c.subject}</h3>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{c.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{c.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="truncate">{c.teacher}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              ඔබගේ සෙවුමට ගැලපෙන පන්ති නොමැත
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="all">සියල්ල</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
