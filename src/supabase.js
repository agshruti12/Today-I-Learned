import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afiqiwiwtgixqdbfadrl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaXFpd2l3dGdpeHFkYmZhZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNjQ4NzgsImV4cCI6MTk5OTg0MDg3OH0.GqSCfjJ7NxesX6YpX7WVDQkymm35IujgnUsHox6JD0c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
