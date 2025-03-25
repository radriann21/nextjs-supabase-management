import { UserSchemaType } from "@/schemas/UserSchema";
import { createClient } from "@/utils/supabase/client";

export const updateProfile = async (data: UserSchemaType, id: string) => {
  const supabase = createClient()

  try {
    const { error } = await supabase.from('profiles').upsert({
      id,
      full_name: data.full_name,
      username: data.username,
      website: data.website,
      updated_at: new Date().toISOString(),
    })
    if (error) {
      console.log(error)
      return
    }
    alert('profile updated!')
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}