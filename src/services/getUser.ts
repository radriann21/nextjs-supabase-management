import { createClient } from "@/utils/supabase/client";

type GetUserProps = {
  userId: string;
};

export const getUser = async ({ userId }: GetUserProps) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select(`full_name, username, website`)
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error("User not found or an error occurred.");
  }

  return data;
};
