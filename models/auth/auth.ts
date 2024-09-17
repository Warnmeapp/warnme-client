import { z } from "zod";

const AuthSchema = z.object({
  isLogin: z.boolean(),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8).optional(),
});

AuthSchema.refine(
  (data) => (data.isLogin ? true : data.password === data.passwordConfirm),
  {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  },
);

export const AuthValidation = toTypedSchema(AuthSchema);
