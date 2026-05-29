import { MapPin, Phone, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import iselogo from "@/assets/iselogo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={iselogo} alt="ISE Logo" className="h-12 w-auto rounded-lg bg-white p-1" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
              දරුවන්ගේ අධ්‍යාපනික හැකියාවන් වර්ධනය කර සාර්ථක අනාගතයක් සඳහා මඟ පෙන්වන විශ්වාසදායී
              අධ්‍යාපන ආයතනය.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {[
                { href: "#home", label: "මුල් පිටුව" },
                { href: "#teachers", label: "ගුරුවරුන්" },
                { href: "#timetable", label: "කාලසටහන" },
                { href: "#contact", label: "සම්බන්ධවන්න" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>තිස්සමහාරාම, ශ්‍රී ලංකා</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+94770000000">+94 77 000 0000</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="https://wa.me/94770000000">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} ISE SE අධ්‍යාපන ආයතනය. සියලුම හිමිකම් ඇවිරිණි.
        </div>
      </div>
    </footer>
  );
}
