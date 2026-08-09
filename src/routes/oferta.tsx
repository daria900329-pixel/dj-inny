import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import wesele from "@/assets/wesele.jpg";
import firmowe from "@/assets/firmowe.jpg";
import studniowka from "@/assets/studniowka.jpg";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [
      { title: "Oferta — wesela, imprezy firmowe, studniówki | DJ Inny" },
      {
        name: "description",
        content:
          "Oferta DJ Inny: wesela, imprezy firmowe, studniówki, urodziny, biesiady śpiewane przy stołach oraz autorskie gry i konkursy.",
      },
      { property: "og:title", content: "Oferta — DJ Inny" },
      {
        property: "og:description",
        content: "Wesela, imprezy firmowe, studniówki, urodziny i biesiady — pełna oprawa imprezy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Offer,
});

const pakiety = [
  {
    img: wesele,
    t: "Oferta weselna",
    d: "Kompleksowa oprawa muzyczna i prowadzenie wesela.",
    p: [
      "Prowadzenie z klasą i humorem",
      "Muzyka dla każdego pokolenia",
      "Autorskie gry i konkursy",
      "Oprawa świetlna i ciężki dym",
    ],
  },
  {
    img: firmowe,
    t: "Imprezy firmowe",
    d: "Jubileusze, bankiety, gale i eventy okolicznościowe.",
    p: [
      "Elegancka konferansjerka",
      "Dopasowany repertuar",
      "Nagłośnienie sal do 300 osób",
      "Współpraca z organizatorem",
    ],
  },
  {
    img: studniowka,
    t: "Studniówki i urodziny",
    d: "Dynamiczna zabawa i najnowsze hity.",
    p: [
      "Polonez i oficjalna część",
      "Najnowsze hity i klasyki",
      "Efekty specjalne",
      "Energia od pierwszej minuty",
    ],
  },
];

const dodatki = [
  "Biesiady śpiewane przy stołach",
  "Ciężki dym do pierwszego tańca",
  "Fontanny iskier",
  "Miny dymne i konfetti",
  "Oświetlenie dekoracyjne sali",
  "Nagłośnienie ceremonii plenerowej",
];

function Offer() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Oferta"
        title="Wybierz imprezę, o której marzysz"
        lead="Każde wydarzenie przygotowuję indywidualnie — od repertuaru po scenariusz i oprawę wizualną."
      />
      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16">
        {pakiety.map((p, i) => (
          <article
            key={p.t}
            className={`card-lux grid overflow-hidden md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}
          >
            <img
              src={p.img}
              alt={p.t}
              loading="lazy"
              width={1280}
              height={853}
              className="h-full min-h-64 w-full object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl text-gold-soft">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              <ul className="mt-6 space-y-3">
                {p.p.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="btn-ghost-gold mt-7">
                Zapytaj o termin
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-border/60 bg-card/30 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="kicker text-center">Dodatki</p>
          <h2 className="mt-3 text-center text-3xl">Oprawa, która robi różnicę</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dodatki.map((d) => (
              <div key={d} className="card-lux flex items-center gap-3 p-5 text-sm">
                <Check className="size-4 text-gold" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
