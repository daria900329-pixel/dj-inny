import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Mic2, Sparkles, ShieldCheck, Users, Music4, Star, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroVideo from "@/assets/hero.mp4.asset.json";
import wesele from "@/assets/wesele.jpg";
import firmowe from "@/assets/firmowe.jpg";
import studniowka from "@/assets/studniowka.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DJ Inny — DJ, Wodzirej, Konferansjer | Dolny Śląsk" },
      {
        name: "description",
        content:
          "DJ Inny — Krzysztof Klimek. Wesela, imprezy firmowe, studniówki i urodziny na Dolnym Śląsku i w całej Polsce. To nie tylko muzyka — to przeżycie.",
      },
      { property: "og:title", content: "DJ Inny — DJ, Wodzirej, Konferansjer" },
      {
        property: "og:description",
        content: "Wesela, imprezy firmowe, studniówki. Muzyka, klasa i energia, która wciąga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const atuty = [
  { icon: Crown, t: "Prowadzenie z klasą", d: "Elegancja, humor i wyczucie momentu." },
  { icon: Mic2, t: "Głos i prezencja", d: "Wyrazisty głos i świetna dykcja sceniczna." },
  { icon: Sparkles, t: "Oprawa wizualna", d: "Światło i efekty, które robią różnicę." },
  { icon: ShieldCheck, t: "Pełen profesjonalizm", d: "Doświadczenie, niezawodny sprzęt, energia." },
  { icon: Users, t: "Klimat i kontakt", d: "Z gośćmi na najwyższym poziomie." },
  { icon: Music4, t: "Najlepsza muzyka", d: "Dobór repertuaru dla każdego pokolenia." },
];

const oferta = [
  {
    img: wesele,
    t: "Wesela",
    d: "Kompleksowa oprawa muzyczna i prowadzenie wesela z klasą, humorem i energią.",
  },
  {
    img: firmowe,
    t: "Imprezy firmowe",
    d: "Jubileusze, bankiety i gale. Elegancka oprawa na najwyższym poziomie.",
  },
  {
    img: studniowka,
    t: "Studniówki i urodziny",
    d: "Dynamiczna zabawa, najnowsze hity i sprawdzone klasyki.",
  },
];

const opinie = [
  {
    n: "Anna",
    t: "Najlepszy wybór na nasze wesele! Goście bawili się do białego rana. Polecamy z całego serca!",
  },
  { n: "Sławek", t: "Pełen profesjonalizm. Wszyscy goście chwalili muzykę i prowadzenie." },
  { n: "Magda i Paweł", t: "Zabawy nie były nachalne, a parkiet cały czas pełny. Dziękujemy!" },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 size-full object-cover brightness-110 contrast-110 saturate-105"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div
          className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.55)" }}
        >
          <p className="kicker">DJ • Wodzirej • Konferansjer</p>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] md:text-7xl">
            To nie tylko muzyka —<br />
            <span className="text-gilded">to przeżycie</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tańczą nawet ci, którzy nigdy nie tańczą. Tworzę imprezy, o których mówi się jeszcze
            długo — z klasą, humorem i perfekcyjną organizacją.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/kontakt" className="btn-gold">
              Zarezerwuj termin
            </Link>
            <Link to="/oferta" className="btn-ghost-gold">
              Zobacz ofertę
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {atuty.map((a) => (
            <div key={a.t} className="card-lux p-6">
              <a.icon className="size-7 text-gold" />
              <h3 className="mt-4 text-lg text-gold-soft">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="kicker">Oferta</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Wybierz imprezę, o której marzysz</h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {oferta.map((o) => (
              <article key={o.t} className="card-lux overflow-hidden">
                <img
                  src={o.img}
                  alt={o.t}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-gold-soft">{o.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{o.d}</p>
                  <Link
                    to="/oferta"
                    className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold"
                  >
                    Dowiedz się więcej →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="kicker">Opinie</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Co mówią klienci</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {opinie.map((o) => (
              <div key={o.n} className="card-lux p-6">
                <Quote className="size-6 text-gold" />
                <p className="mt-4 text-sm text-muted-foreground">{o.t}</p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-sm font-semibold text-gold-soft">{o.n}</span>
                  <span className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl">
            Zadbajmy razem
            <br />
            <span className="text-gilded">o niezapomnianą imprezę</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Twój wyjątkowy dzień zasługuje na oprawę, która przerośnie oczekiwania.
          </p>
          <Link to="/kontakt" className="btn-gold mt-8">
            Sprawdź dostępny termin
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
