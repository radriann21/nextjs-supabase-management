"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type LoginSchemaType } from "@/schemas/LoginSchema";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: LoginSchemaType) {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signUp(formData: LoginSchemaType) {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}