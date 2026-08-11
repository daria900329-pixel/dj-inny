import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { useText } from "@/hooks/useSiteContent";
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

const images = [wesele, firmowe, studniowka];

function Offer() {
  const t = useText();
  return (
    <SiteLayout>
      <PageHero kicker={t("offer.kicker")} title={t("offer.title")} lead={t("offer.lead")} />
      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16">
        {[1, 2, 3].map((n, i) => (
          <article
            key={n}
            className={`card-lux grid overflow-hidden md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}
          >
            <img
              src={images[i]}
              alt={t(`offer.${n}.t`)}
              loading="lazy"
              width={1280}
              height={853}
              className="h-full min-h-64 w-full object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl text-gold-soft">{t(`offer.${n}.t`)}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t(`offer.${n}.d`)}</p>
              <ul className="mt-6 space-y-3">
                {[1, 2, 3, 4].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {t(`offer.${n}.p${p}`)}
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="btn-ghost-gold mt-7">
                {t("offer.cta")}
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-border/60 bg-card/30 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="kicker text-center">{t("offer.extras.kicker")}</p>
          <h2 className="mt-3 text-center text-3xl">{t("offer.extras.title")}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((d) => (
              <div key={d} className="card-lux flex items-center gap-3 p-5 text-sm">
                <Check className="size-4 text-gold" />
                {t(`offer.extra.${d}`)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
