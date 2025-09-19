"use client";
import Image from "next/image";
import "./style.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DoctorCard({ doctor }) {
  const [appointment, setAppointment] = useState("");
  const router = useRouter();

  const handleBookAppointmentt = (doctorName) => {
    setAppointment(doctorName);
    console.log(doctorName, "doctorName");
    router.push(`/our-doctors/${doctorName}`);
  };

  return (
    <div className=" flex flex-col justify-between doctor-container-wrapper rounded-t-[10px] rounded-b-[10px]">
      <div className="relative  w-full h-[317px]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="rounded-t-[10px]"
        />
      </div>
      <div className="p-6">
        <h3 className="doctor-name-title ">{doctor.name}</h3>
        <p className="doctor-speciality-tag">{doctor.speciality}</p>
        <div className="doctor-sub-description-details mt-3 space-y-4">
          <p className="doctor-sub-description-details">
            <span>🎓</span> {doctor.qualification}
          </p>
          <p className="doctor-sub-description-details">
            <span>🩺 </span>
            {doctor.experience}+ Years Experience
          </p>
          <p className="doctor-sub-description-details">
            <span>⏰</span> {doctor.timings}
          </p>
        </div>
      </div>
      <div className="">
        <button
          className="w-full py-3  font-medium rounded-b-[10px] appointment-btn"
          onClick={() => handleBookAppointmentt(doctor.name)}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
