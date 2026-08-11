import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { useText } from "@/hooks/useSiteContent";

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
  const t = useText();
  return (
    <SiteLayout>
      <PageHero kicker={t("about.kicker")} title={t("about.title")} lead={t("about.lead")} />
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-muted-foreground">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
        <p className="text-gold-soft">{t("about.p4")}</p>
        <div className="grid gap-4 pt-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-lux p-6 text-center">
              <p className="text-3xl text-gilded">{t(`about.stat${i}.n`)}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">{t(`about.stat${i}.l`)}</p>
            </div>
          ))}
        </div>
        <div className="pt-6">
          <Link to="/kontakt" className="btn-gold">
            {t("about.cta")}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
