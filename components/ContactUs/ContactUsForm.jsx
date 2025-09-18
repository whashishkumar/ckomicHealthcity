"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.css";
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
    <div>
      <h2 className="font-medium  text-center text-gray-600 text-2xl secondary-font my-2 text-secondary-color">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {/* Name */}
        <div>
          <label className="font-normal primary-font text-color-for-bg">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm  primary-font ">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="font-normal primary-font text-color-for-bg">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm primary-font ">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="font-normal primary-font text-color-for-bg">
            Phone No
          </label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm  primary-font ">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Age + Weight in one line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Age */}
          <div>
            <label className="font-normal primary-font text-color-for-bg">
              Age
            </label>
            <input
              type="text"
              {...register("age")}
              className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
            />
            {errors.age && (
              <p className="text-red-500 text-sm  primary-font ">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="font-normal primary-font text-color-for-bg">
              Weight (kg)
            </label>
            <input
              type="text"
              {...register("weight")}
              className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm primary-font">
                {errors.weight.message}
              </p>
            )}
          </div>
        </div>
        {/* Place */}
        <div>
          <label className="font-normal rounded primary-font text-color-for-bg">
            Place
          </label>
          <input
            type="text"
            {...register("place")}
            className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
          />
          {errors.place && (
            <p className="text-red-500 text-sm  primary-font ">
              {errors.place.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="font-normal primary-font text-color-for-bg">
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full p-2 border rounded font-normal primary-font text-color-for-bg outline-none"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm  primary-font ">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white p-2 rounded contact-us-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
