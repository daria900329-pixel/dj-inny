import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Crown,
  Mic2,
  Sparkles,
  ShieldCheck,
  Users,
  Music4,
  Star,
  Quote,
  Plus,
  MapPin,
  CalendarCheck,
  PartyPopper,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroDj from "@/assets/hero-dj.png.asset.json";
import krzysiekBiznes from "@/assets/krzysiek-portret.png.asset.json";

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

const faq = [
  {
    q: "Jaki rodzaj muzyki gracie?",
    a: "Repertuar dobieram do gości i charakteru imprezy — od ponadczasowych klasyków, przez disco polo, po najnowsze światowe hity.",
    icon: Music4,
  },
  {
    q: "Czy dojeżdżasz do innych miast?",
    a: "Tak — obsługuję cały Dolny Śląsk, a na życzenie dojeżdżam w dowolne miejsce w Polsce.",
    icon: MapPin,
  },
  {
    q: "Czy prowadzisz zabawy podczas imprezy?",
    a: "Oczywiście. Zabawy dobieram z wyczuciem — nigdy nachalnie, zawsze tak, by goście świetnie się bawili.",
    icon: PartyPopper,
  },
  {
    q: "Czy możemy omówić szczegóły i plan imprezy przed wydarzeniem?",
    a: "Zawsze spotykamy się (osobiście lub online), by dopiąć harmonogram, listę utworów i wszystkie życzenia.",
    icon: CalendarCheck,
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
      <section className="relative overflow-hidden bg-black pt-24">
        <div className="absolute inset-x-0 bottom-0 top-24">
          <img
            src={heroDj.url}
            alt="DJ Inny — Krzysztof Klimek prowadzi imprezę przy konsolecie"
            className="size-full object-cover object-[72%_top] brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent md:via-black/35" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div
          className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-20 pt-10 min-h-[640px] lg:min-h-[780px] lg:grid-cols-[1.05fr_1fr]"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-gold md:text-sm">
              DJ • WODZIREJ • KONFERANSJER
            </p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
              To nie tylko muzyka —{" "}
              <span className="text-gilded">to przeżycie</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              Tańczą nawet ci, którzy nigdy nie tańczą. Tworzę imprezy, o których mówi się
              jeszcze długo — z klasą, humorem i perfekcyjną organizacją.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-gold">
                Zarezerwuj termin <CalendarCheck className="size-4" />
              </Link>
              <Link to="/oferta" className="btn-ghost-gold">
                Zobacz ofertę <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" />
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

      <section className="border-t border-border/60 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-gold/40 via-transparent to-gold/10 blur-[2px]" />
            <img
              src={krzysiekBiznes.url}
              alt="Krzysztof Klimek — DJ Inny w eleganckiej biznesowej stylizacji"
              loading="lazy"
              className="relative aspect-[2/3] w-full rounded-[1.4rem] border border-gold/30 object-cover shadow-2xl"
            />
          </div>
          <div>
            <p className="kicker">Moja historia</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Krzysztof Klimek</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Moja przygoda z muzyką i sceną zaczęła się, gdy miałem zaledwie 13 lat. Pierwsze
                imprezy, pierwsze emocje i pierwszy kontakt z ludźmi utwierdziły mnie w przekonaniu,
                że to jest moja droga.
              </p>
              <p>
                Przez wiele lat śpiewałem i grałem na keyboardzie w zespole muzycznym. Z czasem
                odkryłem DJ-owanie — połączenie muzyki, techniki i prowadzenia imprezy, które
                pozwala mi w pełni realizować moją pasję.
              </p>
              <p>
                Uwielbiam ludzi i muzykę — to one napędzają mnie od ponad 31 lat. Największą
                satysfakcją jest dla mnie moment, gdy parkiet tętni życiem, a goście bawią się razem
                od pierwszego do ostatniego utworu.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["31", "lat doświadczenia"],
                ["500+", "imprez"],
                ["100%", "zaangażowania"],
              ].map(([n, l]) => (
                <div key={l} className="card-lux p-5 text-center">
                  <p className="text-3xl text-gilded">{n}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em]">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/o-mnie" className="btn-ghost-gold mt-8">
              Poznaj mnie lepiej
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Najczęstsze pytania</h2>
            <div className="mt-8 space-y-3">
              {faq.map(({ q, a, icon: Icon }) => (
                <details
                  key={q}
                  className="group card-lux overflow-hidden px-5 py-4 transition-colors hover:border-gold/50"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <Icon className="size-5 shrink-0 text-gold" />
                    <span className="flex-1 text-sm text-foreground/90">{q}</span>
                    <Plus className="size-4 shrink-0 text-gold transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pl-9 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.6rem] bg-gradient-to-tr from-gold/30 via-transparent to-gold/10 blur-[2px]" />
            <img
              src={wesele}
              alt="Pierwszy taniec pary młodej w oprawie fontann iskier"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.4rem] border border-gold/30 object-cover shadow-2xl"
            />
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
