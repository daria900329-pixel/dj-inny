import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Facebook, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useText } from "@/hooks/useSiteContent";

function Header() {
  const [open, setOpen] = useState(false);
  const t = useText();
  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/o-mnie", label: t("nav.about") },
    { to: "/oferta", label: t("nav.offer") },
    { to: "/galeria", label: t("nav.gallery") },
    { to: "/kontakt", label: t("nav.contact") },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="DJ Inny — logo" className="h-14 w-auto md:h-20" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/kontakt" className="btn-gold !px-5 !py-2.5">
            {t("nav.cta")}
          </Link>
        </nav>
        <button
          className="text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.18em] text-muted-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const t = useText();
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="DJ Inny" className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="kicker">{t("nav.contact")}</p>
          <a href="tel:+48515646970" className="flex items-center gap-3 hover:text-gold">
            <Phone className="size-4 text-gold" /> {t("contact.phone")}
          </a>
          <a
            href="https://facebook.com/djinny.klimek"
            className="flex items-center gap-3 hover:text-gold"
          >
            <Facebook className="size-4 text-gold" /> {t("contact.facebook")}
          </a>
          <p className="flex items-center gap-3">
            <Globe className="size-4 text-gold" /> {t("contact.www")}
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="size-4 text-gold" /> {t("contact.area")}
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="kicker">{t("footer.realizations.title")}</p>
          <p>{t("footer.realizations.1")}</p>
          <p>{t("footer.realizations.2")}</p>
          <p>{t("footer.realizations.3")}</p>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-card/60 to-background px-5 pt-32 pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">
          <span className="text-gilded">{title}</span>
        </h1>
        {lead && <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}
