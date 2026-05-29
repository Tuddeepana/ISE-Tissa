import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Teachers } from "@/components/site/Teachers";
import { Vision } from "@/components/site/Vision";
import { Timetable } from "@/components/site/Timetable";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISE SE අධ්‍යාපන ආයතනය තිස්සමහාරාම | Quality Education in Sri Lanka" },
      {
        name: "description",
        content:
          "ISE SE අධ්‍යාපන ආයතනය තිස්සමහාරාම - ගුණාත්මක අධ්‍යාපනයෙන් සාර්ථකත්වයට මඟ පෙන්වීම. පන්ති කාලසටහන සහ පළපුරුදු ගුරුවරුන්.",
      },
      { property: "og:title", content: "ISE SE අධ්‍යාපන ආයතනය තිස්සමහාරාම" },
      {
        property: "og:description",
        content: "Quality education institute in Thissamaharama, Sri Lanka",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "ISE SE අධ්‍යාපන ආයතනය",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thissamaharama",
            addressCountry: "LK",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Vision />
        <Timetable />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
