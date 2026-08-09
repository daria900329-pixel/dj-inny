import { createFileRoute } from "@tanstack/react-router";
import { Phone, Facebook, Globe, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — zarezerwuj termin | DJ Inny" },
      {
        name: "description",
        content:
          "Skontaktuj się z DJ Inny — Krzysztof Klimek. Tel. 515 646 970. Dolny Śląsk i cała Polska. Sprawdź dostępny termin.",
      },
      { property: "og:title", content: "Kontakt — DJ Inny" },
      {
        property: "og:description",
        content: "Zarezerwuj termin: 515 646 970, Dolny Śląsk i cała Polska.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const faq = [
  ["Jaki rodzaj muzyki gracie?", "Repertuar dobieram do gości — od klasyki po najnowsze hity."],
  ["Czy dojeżdżasz do innych miast?", "Tak, działam na Dolnym Śląsku i w całej Polsce."],
  ["Czy prowadzisz zabawy podczas imprezy?", "Tak — autorskie gry, konkursy i zabawy z klasą."],
  ["Czy omawiamy plan imprezy wcześniej?", "Zawsze. Scenariusz ustalamy wspólnie przed terminem."],
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Skontaktuj się"
        title="Sprawdź dostępny termin"
        lead="Napisz lub zadzwoń — chętnie opowiem, jak może wyglądać Twoja impreza."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2">
        <div className="card-lux space-y-5 p-8">
          <h2 className="text-2xl text-gold-soft">Dane kontaktowe</h2>
          <a href="tel:+48515646970" className="flex items-center gap-3 hover:text-gold">
            <Phone className="size-5 text-gold" /> 515 646 970
          </a>
          <a
            href="https://facebook.com/djinny.klimek"
            className="flex items-center gap-3 hover:text-gold"
          >
            <Facebook className="size-5 text-gold" /> facebook.com/djinny.klimek
          </a>
          <p className="flex items-center gap-3">
            <Globe className="size-5 text-gold" /> www.djinny.pl
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="size-5 text-gold" /> Dolny Śląsk i cała Polska
          </p>
          <a href="tel:+48515646970" className="btn-gold mt-2">
            Zadzwoń teraz
          </a>
        </div>
        <div className="space-y-3">
          <p className="kicker">FAQ</p>
          {faq.map(([q, a]) => (
            <details key={q} className="card-lux p-5">
              <summary className="cursor-pointer text-sm font-semibold text-gold-soft">{q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
