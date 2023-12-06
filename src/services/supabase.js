import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://xxxx.supabase.co", "xxxx");
export default supabase;