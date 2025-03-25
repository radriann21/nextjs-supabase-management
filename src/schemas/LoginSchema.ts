import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({ invalid_type_error: "Email is required", required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ invalid_type_error: "Password is required", required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }).max(32, { message: "Password must be at most 32 characters long" })
})

export type LoginSchemaType = z.infer<typeof LoginSchema>