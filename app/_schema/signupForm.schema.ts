import { z } from "zod";
const signupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must contain at least 5 character" }),
  confirmPassword: z
    .string()
    .min(5, { message: "Password must contain at least 5 character" }),
});
export default signupFormSchema;
