import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null;

function getSupabase() {
  if (supabaseInstance) return supabaseInstance;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase configuration is missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.");
  }

  supabaseInstance = createClient(url, key);
  return supabaseInstance;
}

export async function addToWaitlist(email: string) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }])

    return error;
  } catch (err: any) {
    return { message: err.message };
  }
}
