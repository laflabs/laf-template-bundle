import { z } from 'zod';

export const signupSchema = z
  .object({
    username: z.string().min(3).max(10),
    password: z.string().min(6).max(50),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  });
