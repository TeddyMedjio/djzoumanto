import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  location: z.string().min(1, "Location is required"),
  phone: z.string().min(5, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
