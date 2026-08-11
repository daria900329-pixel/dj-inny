import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { contentDefaults } from "@/content/site-content";

type Overrides = Record<string, string>;

const SiteContentContext = createContext<Overrides>({});

export async function fetchSiteContent(): Promise<Overrides> {
  const { data, error } = await supabase.from("site_content").select("key, value");
  if (error) return {};
  const map: Overrides = {};
  for (const row of data ?? []) {
    if (row.value && row.value.trim() !== "") map[row.key] = row.value;
  }
  return map;
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery({
    queryKey: ["site_content"],
    queryFn: fetchSiteContent,
    staleTime: 30_000,
  });

  return (
    <SiteContentContext.Provider value={data ?? {}}>{children}</SiteContentContext.Provider>
  );
}

/** Zwraca funkcję t(key) — tekst z panelu admina lub domyślny z kodu. */
export function useText() {
  const overrides = useContext(SiteContentContext);
  return (key: string) => overrides[key] ?? contentDefaults[key] ?? "";
}
