import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Browser/client-safe Supabase client. Uses the anon (publishable) key, which
 * is safe to expose publicly — access is governed by Row Level Security
 * policies on each table in the Supabase project.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
