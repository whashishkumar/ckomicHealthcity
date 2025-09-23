import React from "react";
import OurSpecialties from "../../../../components/OurSpecialties";
import OurDoctors from "../../../../components/OurDoctors";
import Location from "../../../../components/Location";

const doctors = [
  {
    id: 1,
    name: "Dr. Elora Williams",
    speciality: "Cardiologist",
    qualification: "MD Cardiology, AIIMS Delhi",
    experience: 15,
    timings: "Mon–Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "cardiologist",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    speciality: "Neurologist",
    qualification: "DM Neurology, PGI Chandigarh",
    experience: 12,
    timings: "Mon–Sat: 10AM–6PM",
    image: "/images/doctor.png",
    type: "neurologist",
  },

  {
    id: 5,
    name: "Dr. Sneha Sharma",
    speciality: "Pediatrician",
    qualification: "MD Pediatrics, CMC Vellore",
    experience: 10,
    timings: "Mon–Sat: 9AM–4PM",
    image: "/images/doctor.png",
    type: "pediatrician",
  },
  {
    id: 6,
    name: "Dr. Arjun Patel",
    speciality: "Oncologist",
    qualification: "DM Oncology, Tata Memorial Hospital",
    experience: 14,
    timings: "Mon–Fri: 10AM–5PM",
    image: "/images/doctor.png",
    type: "oncologist",
  },
];
export default function page({ params }) {
  const { slug } = params;

  return (
    <div>
      <OurSpecialties slug={slug} />
      <OurDoctors doctors={doctors} />
      <Location />
    </div>
  );
}
