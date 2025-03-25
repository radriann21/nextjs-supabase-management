import { z } from "zod";

export const UserSchema = z.object({
  full_name: z.string({ required_error: "Full name is required" }).min(3, { message: "Full name must be at least 3 characters long" }).max(100, { message: "Full name must be at most 100 characters long" }),
  username: z.string({ required_error: "Username is required" }).min(3, { message: "Username must be at least 3 characters long" }).max(100, { message: "Username must be at most 100 characters long" }),
  website: z.string().url({ message: "Invalid URL" })
})

export type UserSchemaType = z.infer<typeof UserSchema>