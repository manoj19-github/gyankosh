import { z } from "zod";
const signInFormSchema = z.object({
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must contain at least 5 character" }),
});
export default signInFormSchema;
