"use client";
import React, { useState } from "react";
import PageTitle from "../../ui/PageTitle";
import "./style.css";
import DoctorCard from "./DoctorsCard";

export default function OurDoctors({ doctors, doctorTypes }) {
  const [activeDoctor, setActiveDoctor] = useState("All Doctors");

  return (
    <div className="hero-main-container bg-color-doctor-section">
      <div className="grid  grid-cols-1  md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%] gap-10 py-16">
        <PageTitle
          tag="Our Doctors"
          heading="Meet our high quality & expert Doctors"
          headingClass="text-4xl font-bold text-blue-700 mt-4 doctors-title-heading"
          wrapperClass="max-w-3xl mx-auto text-left "
        />
        <div className="flex items-center gap-3 md:gap-3 lg:gap-3 flex-wrap">
          {doctorTypes &&
            doctorTypes.map((doctor) => (
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full pb-16">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
