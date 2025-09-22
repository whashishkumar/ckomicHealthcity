import React from "react";
import Reviews from "../../../components/Reviews";
import OurDoctors from "../../../components/OurDoctors";

const doctorTypes = [
  { id: 1, name: "All Doctors" },
  { id: 2, name: "neurologist" },
  { id: 3, name: "dermatologist" },
  { id: 4, name: "orthopedic" },
  { id: 5, name: "pediatrician" },
  { id: 6, name: "gynecologist" },
  { id: 7, name: "cardiologist" },
  { id: 8, name: "psychiatrist" },
];

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
    id: 3,
    name: "Dr. Aisha Khan",
    speciality: "Dermatologist",
    qualification: "MD Dermatology, AIIMS Delhi",
    experience: 8,
    timings: "Tue–Sun: 11AM–7PM",
    image: "/images/doctor.png",
    type: "dermatologist",
  },
  {
    id: 4,
    name: "Dr. Rajiv Kapoor",
    speciality: "Orthopedic Surgeon",
    qualification: "MS Orthopedics, AIIMS Delhi",
    experience: 18,
    timings: "Mon–Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "orthopedic",
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
  {
    id: 7,
    name: "Dr. Meera Iyer",
    speciality: "Gynecologist",
    qualification: "MD Obstetrics & Gynecology, JIPMER",
    experience: 11,
    timings: "Mon–Sat: 9AM–2PM",
    image: "/images/doctor.png",
    type: "gynecologist",
  },
  {
    id: 8,
    name: "Dr. Karan Gupta",
    speciality: "ENT Specialist",
    qualification: "MS ENT, PGIMER Chandigarh",
    experience: 9,
    timings: "Tue–Sat: 11AM–6PM",
    image: "/images/doctor.png",
    type: "ent",
  },
  {
    id: 9,
    name: "Dr. Neha Verma",
    speciality: "Psychiatrist",
    qualification: "MD Psychiatry, AIIMS Delhi",
    experience: 7,
    timings: "Mon–Fri: 10AM–4PM",
    image: "/images/doctor.png",
    type: "psychiatrist",
  },
  {
    id: 10,
    name: "Dr. Vikram Singh",
    speciality: "Gastroenterologist",
    qualification: "DM Gastroenterology, SGPGI Lucknow",
    experience: 13,
    timings: "Mon–Sat: 9AM–5PM",
    image: "/images/doctor.png",
    type: "gastroenterologist",
  },
  {
    id: 11,
    name: "Dr. Priya Nair",
    speciality: "Endocrinologist",
    qualification: "DM Endocrinology, AIIMS Delhi",
    experience: 10,
    timings: "Tue–Sun: 10AM–6PM",
    image: "/images/doctor.png",
    type: "endocrinologist",
  },
  {
    id: 12,
    name: "Dr. Sameer Malhotra",
    speciality: "Pulmonologist",
    qualification: "MD Pulmonology, KEM Mumbai",
    experience: 16,
    timings: "Mon–Fri: 9AM–3PM",
    image: "/images/doctor.png",
    type: "pulmonologist",
  },
];

export default function DoctorsPage() {
  return (
    <div>
      <OurDoctors doctors={doctors} doctorTypes={doctorTypes} />
      <Reviews />
    </div>
  );
}
