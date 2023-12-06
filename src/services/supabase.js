import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://umrjofvdjihonczfbxhh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtcmpvZnZkamlob25jemZieGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NzkzNDAsImV4cCI6MjAxNzQ1NTM0MH0.SSABvSXS9DlP_YjI_PTy6hrEy0cwwct5pBWfQ8aaSdg");
export default supabase;