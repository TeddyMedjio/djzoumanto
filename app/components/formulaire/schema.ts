import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  location: z.string().min(5, "Location is required"),
  phone: z.string().min(5, "Phone is required"),
  message: z.string().min(20, "Message is required (min 20 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
