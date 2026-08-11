import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { useText } from "@/hooks/useSiteContent";
import wesele from "@/assets/wesele.jpg";
import firmowe from "@/assets/firmowe.jpg";
import studniowka from "@/assets/studniowka.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — imprezy i realizacje | DJ Inny" },
      {
        name: "description",
        content:
          "Galeria zdjęć z wesel, imprez firmowych i studniówek prowadzonych przez DJ Inny — Krzysztofa Klimka.",
      },
      { property: "og:title", content: "Galeria — DJ Inny" },
      { property: "og:description", content: "Zdjęcia z wesel, imprez firmowych i studniówek." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const photos = [wesele, studniowka, firmowe, studniowka, firmowe, wesele];

function Gallery() {
  const t = useText();
  return (
    <SiteLayout>
      <PageHero kicker={t("gallery.kicker")} title={t("gallery.title")} lead={t("gallery.lead")} />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Realizacja DJ Inny ${i + 1}`}
              loading="lazy"
              width={1280}
              height={853}
              className="h-64 w-full rounded-xl border border-border object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">{t("gallery.note")}</p>
      </section>
    </SiteLayout>
  );
}
