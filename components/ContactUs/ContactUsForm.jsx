"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod Schema inside same file
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  age: z
    .string()
    .regex(/^[0-9]+$/, "Age must be a number")
    .refine((val) => Number(val) > 0 && Number(val) < 120, {
      message: "Age must be between 1 and 120",
    }),
  weight: z
    .string()
    .regex(/^[0-9]+$/, "Weight must be a number")
    .refine((val) => Number(val) > 20 && Number(val) < 300, {
      message: "Weight must be between 20kg and 300kg",
    }),
  place: z.string().min(2, "Place must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone No</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="text"
            {...register("age")}
            className="w-full p-2 border rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        {/* Weight */}
        <div>
          <label className="block font-medium">Weight (kg)</label>
          <input
            type="text"
            {...register("weight")}
            className="w-full p-2 border rounded"
          />
          {errors.weight && (
            <p className="text-red-500 text-sm">{errors.weight.message}</p>
          )}
        </div>

        {/* Place */}
        <div>
          <label className="block font-medium">Place</label>
          <input
            type="text"
            {...register("place")}
            className="w-full p-2 border rounded"
          />
          {errors.place && (
            <p className="text-red-500 text-sm">{errors.place.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full p-2 border rounded"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
