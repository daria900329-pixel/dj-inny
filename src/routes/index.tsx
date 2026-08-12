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
import { useText } from "@/hooks/useSiteContent";
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

const atutIcons = [Crown, Mic2, Sparkles, ShieldCheck, Users, Music4];
const ofertaImgs = [wesele, firmowe, studniowka];
const faqIcons = [Music4, MapPin, PartyPopper, CalendarCheck];

function Home() {
  const t = useText();

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-black pt-24">
        <div className="absolute inset-x-0 bottom-0 top-24 hidden lg:block">
          <img
            src={heroDj.url}
            alt="DJ Inny — Krzysztof Klimek prowadzi imprezę przy konsolecie"
            className="size-full object-cover object-[30%_top] brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative lg:hidden">
          <div className="relative aspect-[4/5] w-full">
            <img
              src={heroDj.url}
              alt="DJ Inny — Krzysztof Klimek prowadzi imprezę przy konsolecie"
              className="size-full object-cover object-[48%_top] brightness-110 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/95" />
          </div>
        </div>

        <div
          className="relative mx-auto grid w-full max-w-7xl items-start gap-8 px-5 pb-16 pt-8 lg:min-h-[780px] lg:items-start lg:pb-20 lg:pt-20 lg:grid-cols-[1fr_1fr]"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.92)" }}
        >
          <div className="relative max-w-xl lg:max-w-lg">
            <p className="text-xs font-bold tracking-[0.3em] text-gold md:text-sm">
              {t("home.hero.kicker")}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.02] md:text-6xl lg:text-6xl">
              {t("home.hero.title1")}{" "}
              <span className="text-gilded">{t("home.hero.title2")}</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base lg:text-lg">{t("home.hero.lead")}</p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-9 md:gap-4">
              <Link to="/kontakt" className="btn-gold">
                {t("home.hero.cta1")} <CalendarCheck className="size-4" />
              </Link>
              <Link to="/oferta" className="btn-ghost-gold">
                {t("home.hero.cta2")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {atutIcons.map((Icon, i) => (
            <div key={i} className="card-lux p-6">
              <Icon className="size-7 text-gold" />
              <h3 className="mt-4 text-lg text-gold-soft">{t(`home.atut.${i + 1}.t`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`home.atut.${i + 1}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="kicker">{t("home.offer.kicker")}</p>
            <h2 className="mt-3 text-3xl md:text-5xl">{t("home.offer.title")}</h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {ofertaImgs.map((img, i) => (
              <article key={i} className="card-lux overflow-hidden">
                <img
                  src={img}
                  alt={t(`home.offer.${i + 1}.t`)}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-gold-soft">{t(`home.offer.${i + 1}.t`)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t(`home.offer.${i + 1}.d`)}</p>
                  <Link
                    to="/oferta"
                    className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold"
                  >
                    {t("home.offer.more")}
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
            <p className="kicker">{t("home.story.kicker")}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{t("home.story.title")}</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>{t("home.story.p1")}</p>
              <p>{t("home.story.p2")}</p>
              <p>{t("home.story.p3")}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="card-lux p-5 text-center">
                  <p className="text-3xl text-gilded">{t(`home.story.stat${n}.n`)}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em]">
                    {t(`home.story.stat${n}.l`)}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/o-mnie" className="btn-ghost-gold mt-8">
              {t("home.story.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">{t("home.faq.kicker")}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{t("home.faq.title")}</h2>
            <div className="mt-8 space-y-3">
              {faqIcons.map((Icon, i) => (
                <details
                  key={i}
                  className="group card-lux overflow-hidden px-5 py-4 transition-colors hover:border-gold/50"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <Icon className="size-5 shrink-0 text-gold" />
                    <span className="flex-1 text-sm text-foreground/90">
                      {t(`home.faq.${i + 1}.q`)}
                    </span>
                    <Plus className="size-4 shrink-0 text-gold transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pl-9 text-sm text-muted-foreground">
                    {t(`home.faq.${i + 1}.a`)}
                  </p>
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
            <p className="kicker">{t("home.reviews.kicker")}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{t("home.reviews.title")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card-lux p-6">
                <Quote className="size-6 text-gold" />
                <p className="mt-4 text-sm text-muted-foreground">{t(`home.review.${n}.t`)}</p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-sm font-semibold text-gold-soft">
                    {t(`home.review.${n}.n`)}
                  </span>
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
            {t("home.cta.title1")}
            <br />
            <span className="text-gilded">{t("home.cta.title2")}</span>
          </h2>
          <p className="mt-5 text-muted-foreground">{t("home.cta.lead")}</p>
          <Link to="/kontakt" className="btn-gold mt-8">
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
