import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  full_name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry_type: string;
  country?: string;
  message: string;
  referral?: string;
}
