import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/o-mnie")({
  head: () => ({
    meta: [
      { title: "O mnie — Krzysztof Klimek | DJ Inny" },
      {
        name: "description",
        content:
          "Poznaj Krzysztofa Klimka — DJ-a, wodzireja i konferansjera. Muzyka, scena i ludzie od ponad 30 lat.",
      },
      { property: "og:title", content: "O mnie — Krzysztof Klimek | DJ Inny" },
      {
        property: "og:description",
        content: "Muzyka, scena i ludzie od ponad 30 lat — poznaj DJ Inny.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Moja historia"
        title="Krzysztof Klimek"
        lead="DJ, wodzirej i konferansjer. Prowadzę imprezy, na których tańczą nawet ci, którzy nigdy nie tańczą."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-muted-foreground">
        <p>
          Moja przygoda z muzyką i sceną zaczęła się bardzo wcześnie. Pierwsze imprezy, pierwsze
          emocje i pierwszy kontakt z ludźmi utwierdziły mnie w przekonaniu, że to jest moja droga.
        </p>
        <p>
          Przez wiele lat śpiewałem i grałem na keyboardzie w zespole muzycznym. Z czasem odkryłem
          DJ-owanie — połączenie muzyki, techniki i prowadzenia imprezy, które pozwala mi w pełni
          realizować moją pasję.
        </p>
        <p>
          Uwielbiam ludzi i muzykę. Największą satysfakcją jest dla mnie moment, gdy parkiet tętni
          życiem, a goście bawią się razem od pierwszego do ostatniego utworu.
        </p>
        <p className="text-gold-soft">
          Zaufanie, które otrzymuję, jest dla mnie największym wyróżnieniem.
        </p>
        <div className="grid gap-4 pt-6 sm:grid-cols-3">
          {[
            ["30+", "lat na scenie"],
            ["500+", "poprowadzonych imprez"],
            ["100%", "zaangażowania"],
          ].map(([n, l]) => (
            <div key={l} className="card-lux p-6 text-center">
              <p className="text-3xl text-gilded">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">{l}</p>
            </div>
          ))}
        </div>
        <div className="pt-6">
          <Link to="/kontakt" className="btn-gold">
            Porozmawiajmy o Twojej imprezie
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
