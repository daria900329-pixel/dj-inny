import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Facebook, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/galeria", label: "Galeria" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="DJ Inny — logo" className="h-10 w-auto" />
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
            Zarezerwuj termin
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
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="DJ Inny" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            DJ • Wodzirej • Konferansjer. To nie tylko muzyka — to przeżycie.
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="kicker">Kontakt</p>
          <a href="tel:+48515646970" className="flex items-center gap-3 hover:text-gold">
            <Phone className="size-4 text-gold" /> 515 646 970
          </a>
          <a
            href="https://facebook.com/djinny.klimek"
            className="flex items-center gap-3 hover:text-gold"
          >
            <Facebook className="size-4 text-gold" /> facebook.com/djinny.klimek
          </a>
          <p className="flex items-center gap-3">
            <Globe className="size-4 text-gold" /> www.djinny.pl
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="size-4 text-gold" /> Dolny Śląsk i cała Polska
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="kicker">Realizacje</p>
          <p>Wesela • Imprezy firmowe • Urodziny</p>
          <p>Studniówki • Biesiady śpiewane przy stołach</p>
          <p>Autorskie gry, konkursy i zabawy</p>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DJ INNY — Krzysztof Klimek. Wszelkie prawa zastrzeżone.
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
