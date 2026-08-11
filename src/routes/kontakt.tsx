import { createFileRoute } from "@tanstack/react-router";
import { Phone, Facebook, Globe, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { useText } from "@/hooks/useSiteContent";

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

function Contact() {
  const t = useText();
  return (
    <SiteLayout>
      <PageHero kicker={t("contact.kicker")} title={t("contact.title")} lead={t("contact.lead")} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2">
        <div className="card-lux space-y-5 p-8">
          <h2 className="text-2xl text-gold-soft">{t("contact.box.title")}</h2>
          <a href="tel:+48515646970" className="flex items-center gap-3 hover:text-gold">
            <Phone className="size-5 text-gold" /> {t("contact.phone")}
          </a>
          <a
            href="https://facebook.com/djinny.klimek"
            className="flex items-center gap-3 hover:text-gold"
          >
            <Facebook className="size-5 text-gold" /> {t("contact.facebook")}
          </a>
          <p className="flex items-center gap-3">
            <Globe className="size-5 text-gold" /> {t("contact.www")}
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="size-5 text-gold" /> {t("contact.area")}
          </p>
          <a href="tel:+48515646970" className="btn-gold mt-2">
            {t("contact.cta")}
          </a>
        </div>
        <div className="space-y-3">
          <p className="kicker">{t("contact.faq.kicker")}</p>
          {[1, 2, 3, 4].map((i) => (
            <details key={i} className="card-lux p-5">
              <summary className="cursor-pointer text-sm font-semibold text-gold-soft">
                {t(`contact.faq.${i}.q`)}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{t(`contact.faq.${i}.a`)}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
