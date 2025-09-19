"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "../../ui/PageTitle";

// ✅ Zod Schema
const appointmentSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Location is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="text-white md:py-10 py-10">
      <PageTitle
        heading="Book Your Appointment Online"
        headingClass="text-4xl font-bold mt-4 text-white"
        wrapperClass="max-w-3xl mx-auto text-left"
        subHeading={`Trusted by patients worldwide, our seamless booking system makes it
            easy to schedule your visit anytime, anywhere.`}
        subHeadingClass="text-white my-3 text-[28px] text-color leading-[1.75rem]"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-7">
        <div>
          <input
            autoComplete="off"
            type="text"
            placeholder="Full name"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.name ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          />
          {errors.name && (
            <p className="error-text-msg mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            autoComplete="off"
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.email ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          />
          {errors.email && (
            <p className="error-text-msg mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            autoComplete="off"
            type="text"
            placeholder="Contact number"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.phone ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          />
          {errors.phone && (
            <p className="error-text-msg mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("service")}
            className={`appearance-none w-full px-4 py-3 rounded-md border ${
              errors.service ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          >
            <option value="" className="form-placeholder-text">
              Choose service
            </option>
            <option value="general" className="form-placeholder-text">
              General Consultation
            </option>
            <option value="dental">Dental Care</option>
            <option value="cardiology">Cardiology</option>
            <option value="therapy">Therapy</option>
          </select>
          {errors.service && (
            <p className="error-text-msg mt-1">{errors.service.message}</p>
          )}
        </div>
        <div>
          <input
            autoComplete="off"
            type="text"
            placeholder="Location"
            {...register("location")}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.location ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          />
          {errors.location && (
            <p className="error-text-msg mt-1">{errors.location.message}</p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            {...register("message")}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.message ? "border-red-400" : "border-gray-300"
            } focus:outline-none form-placeholder-text`}
          ></textarea>
          {errors.message && (
            <p className="error-text-msg mt-1">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-white px-8 py-5 rounded-md font-medium shadow-md  book-appoitment-btn"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
