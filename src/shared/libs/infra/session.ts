import { supabase } from "shared/api/supabase";

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
};
