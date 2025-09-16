"use client";
import React, { useState } from "react";
import PageTitle from "../../ui/PageTitle";
import "./style.css";
import DoctorCard from "./DoctorsCard";

const doctorTypes = [
  { id: 1, name: "All Doctors" },
  { id: 2, name: "neurologist" },
  { id: 3, name: "dermatologist" },
  { id: 4, name: "orthopedic" },
];
const doctors = [
  {
    id: 1,
    name: "Dr. Elora Williams",
    speciality: "Cardiology",
    qualification: "MD Cardiology, AIIMS Delhi",
    experience: 15,
    timings: "Mon-Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "All Doctors",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    speciality: "Neurologist",
    qualification: "DM Neurology, PGI Chandigarh",
    experience: 12,
    timings: "Mon-Sat: 10AM–6PM",
    image: "/images/doctor.png",
    type: "neurologist",
  },
  {
    id: 3,
    name: "Dr. Aisha Khan",
    speciality: "Dermatologist",
    qualification: "MD Dermatology, AIIMS Delhi",
    experience: 8,
    timings: "Tue-Sun: 11AM–7PM",
    image: "/images/doctor.png",
    type: "dermatologist",
  },
  {
    id: 4,
    name: "Dr. Rajiv Kapoor",
    speciality: "Orthopedic",
    qualification: "MS Orthopedics, AIIMS Delhi",
    experience: 18,
    timings: "Mon-Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "orthopedic",
  },
];

export default function OurDoctors() {
  const [activeDoctor, setActiveDoctor] = useState("All Doctors");

  return (
    <div className="hero-main-container">
      <div className="grid  grid-cols-1  md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%] gap-10 py-16">
        <PageTitle
          tag="Our Doctors"
          heading="Meet our high quality & expert Doctors"
          tagClass="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 inline-block"
          headingClass="text-4xl font-bold text-blue-700 mt-4 doctors-title-heading"
          wrapperClass="max-w-3xl mx-auto text-left "
        />
        <div className="flex items-center gap-3  md:gap-3 lg:gap-5 flex-wrap">
          {doctorTypes.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => setActiveDoctor(doctor.name)}
              className={` capitalize  ${
                activeDoctor === doctor.name
                  ? "type-btn active-btn "
                  : "type-btn"
              }`}
            >
              {doctor.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full mb-16">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
