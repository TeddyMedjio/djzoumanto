// app/contact/Form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "./schema";
import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Ajoutez ceci pour voir les données envoyées
    const res = await fetch("../api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      setSuccess(true);
    }
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card text-white p-8 rounded-2xl w-full mx-auto space-y-6 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Name</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className="bg-[#1a1a1a] p-2 w-full rounded-md border border-white/10 focus:outline-1 focus:outline-secondary/50 mt-4"
          />
          <p className="text-red-400 text-sm">{errors.name?.message}</p>
        </div>
        <div>
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="example@example.com"
            className="bg-[#1a1a1a] p-2 w-full rounded-md border border-white/10 focus:outline-1 focus:outline-secondary/50 mt-4"
          />
          <p className="text-red-400 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <label>Location</label>
          <input
            {...register("location")}
            placeholder="Club X, New York"
            className="bg-[#1a1a1a] p-2 w-full rounded-md border border-white/10 focus:outline-1 focus:outline-secondary/50 mt-4"
          />
          <p className="text-red-400 text-sm">{errors.location?.message}</p>
        </div>
        <div>
          <label>Phone</label>
          <input
            {...register("phone")}
            placeholder="+123123123"
            className="bg-[#1a1a1a] p-2 w-full rounded-md border border-white/10 focus:outline-1 focus:outline-secondary/50 mt-4"
          />
          <p className="text-red-400 text-sm">{errors.phone?.message}</p>
        </div>
      </div>
      <div>
        <label>Message</label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="We want you to perform in our club..."
          className="bg-[#1a1a1a] p-2 w-full rounded-md border border-white/10 focus:outline-1 focus:outline-secondary/50 mt-4"
        />
        <p className="text-red-400 text-sm">{errors.message?.message}</p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full py-3 rounded-full bg-secondary hover:bg-white transition duration-300 ease-in-out text-black font-semibold"
      >
        Submit
      </button>
      {success && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
    </form>
  );
}
