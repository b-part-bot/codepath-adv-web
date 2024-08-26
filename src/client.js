import { createClient } from '@supabase/supabase-js';
const URL = 'https://eowizfbrolfxhpjyhdpn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvd2l6ZmJyb2xmeGhwanloZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MzI1MzMsImV4cCI6MjA0MDIwODUzM30.C34gClLuvIb9N_RcYh7UUMphmkrdb56zDD0NhPaWsuE';
export const supabase = createClient(URL, API_KEY);



