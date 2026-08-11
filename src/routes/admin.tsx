import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { contentGroups, contentDefaults } from "@/content/site-content";
import { fetchSiteContent } from "@/hooks/useSiteContent";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Panel administratora | DJ Inny" },
      { name: "description", content: "Panel edycji treści strony DJ Inny." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Panel administratora | DJ Inny" },
      { property: "og:description", content: "Panel edycji treści strony DJ Inny." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const check = async () => {
    setChecking(true);
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setIsAdmin(false);
      setChecking(false);
      return;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.user.id)
      .eq("role", "admin");
    setIsAdmin(!!roles && roles.length > 0);
    setChecking(false);
  };

  useEffect(() => {
    void check();
  }, []);

  if (checking) {
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">Ładowanie…</p>
      </Shell>
    );
  }

  if (!isAdmin) return <LoginCard onSuccess={check} />;
  return <Editor onSignOut={check} />;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="DJ Inny" className="h-12 w-auto" />
          </Link>
          <p className="kicker">Panel administratora</p>
        </div>
        {children}
      </div>
    </div>
  );
}

function LoginCard({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Nie udało się zalogować. Sprawdź e-mail i hasło.");
      return;
    }
    toast.success("Zalogowano");
    onSuccess();
  };

  return (
    <Shell>
      <form onSubmit={submit} className="card-lux mx-auto max-w-md space-y-5 p-8">
        <h1 className="text-2xl text-gold-soft">Logowanie</h1>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            Hasło
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-gold w-full justify-center">
          {loading ? "Logowanie…" : "Zaloguj się"}
        </button>
      </form>
    </Shell>
  );
}

function Editor({ onSignOut }: { onSignOut: () => void }) {
  const queryClient = useQueryClient();
  const [values, setValues] = useState<Record<string, string>>(contentDefaults);
  const [activeGroup, setActiveGroup] = useState(contentGroups[0]!.id);
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    void (async () => {
      const overrides = await fetchSiteContent();
      setValues({ ...contentDefaults, ...overrides });
      setLoaded(true);
    })();
  }, []);

  const group = useMemo(
    () => contentGroups.find((g) => g.id === activeGroup) ?? contentGroups[0]!,
    [activeGroup],
  );

  const save = async () => {
    setSaving(true);
    const rows = Object.entries(values).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from("site_content").upsert(rows, { onConflict: "key" });
    setSaving(false);
    if (error) {
      toast.error("Nie udało się zapisać zmian.");
      return;
    }
    await queryClient.invalidateQueries({ queryKey: ["site_content"] });
    toast.success("Zapisano zmiany — strona jest zaktualizowana.");
  };

  const resetField = (key: string) =>
    setValues((v) => ({ ...v, [key]: contentDefaults[key] ?? "" }));

  return (
    <Shell>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-gilded">Edycja treści strony</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Zmień dowolny tekst i kliknij „Zapisz zmiany”.
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={save} disabled={saving || !loaded} className="btn-gold">
            {saving ? "Zapisywanie…" : "Zapisz zmiany"}
          </button>
          <button
            className="btn-ghost-gold"
            onClick={async () => {
              await supabase.auth.signOut();
              onSignOut();
            }}
          >
            Wyloguj
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {contentGroups.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGroup(g.id)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
              g.id === activeGroup
                ? "border-gold/60 bg-gold/10 text-gold"
                : "border-border text-muted-foreground hover:text-gold"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="card-lux space-y-6 p-6">
        {group.fields.map((f) => (
          <div key={f.key} className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor={f.key}
                className="text-xs uppercase tracking-[0.14em] text-muted-foreground"
              >
                {f.label}
              </label>
              <button
                type="button"
                onClick={() => resetField(f.key)}
                className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-gold"
              >
                Przywróć
              </button>
            </div>
            {f.multiline ? (
              <textarea
                id={f.key}
                rows={3}
                value={values[f.key] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
              />
            ) : (
              <input
                id={f.key}
                value={values[f.key] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={save} disabled={saving || !loaded} className="btn-gold">
          {saving ? "Zapisywanie…" : "Zapisz zmiany"}
        </button>
      </div>
    </Shell>
  );
}
