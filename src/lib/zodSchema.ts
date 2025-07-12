import z from "zod";

export const onboardingSchema = z.object({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters")
    .max(20, "Name must be less than 20 characters"),
  userName: z
    .string()
    .min(4, "Username should be at least 4 characters")
    .max(10, "Username must be at most 10 characters")
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Username can only contain letters, numbers and -",
    }),
});
