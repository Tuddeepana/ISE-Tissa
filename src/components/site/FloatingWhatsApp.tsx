import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/94770000000"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-[0_8px_24px_-4px_oklch(0.7_0.18_150/0.5)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-whatsapp)] opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
