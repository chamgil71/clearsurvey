import { createClient } from "@supabase/supabase-js";

// Fallback to placeholder values so the client doesn't throw during CI/SSR
// when env vars are absent. Auth calls will fail gracefully (no real session).
const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string) ||
  "https://placeholder.supabase.co";
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
