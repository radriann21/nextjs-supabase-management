"use client";
import { type User } from "@supabase/supabase-js";
import { updateProfile } from "@/services/updateUser";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { type UserSchemaType, UserSchema } from "@/schemas/UserSchema"
import { zodResolver } from "@hookform/resolvers/zod";

export const AccountForm = ({ user }: { user?: User }) => {

  const form = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      full_name: user?.user_metadata?.full_name || "",
      username: user?.user_metadata?.username || "",
      website: user?.user_metadata?.website || "",
    }
  })

  const onSubmit = async (values: UserSchemaType) => {
    await updateProfile(values, user?.id || '')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[520px] mt-8">
        <FormField 
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Button type="submit" className="mt-8 w-full bg-slate-700 cursor-pointer hover:bg-slate-800">Update</Button>
      </form>
    </Form>
  )
}