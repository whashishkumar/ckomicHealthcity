import React from "react";
import "./style.css";
import Image from "next/image";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentBooking() {
  return (
    <div className="appoinment-booking-wrapper grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 items-center">
      <div className="hero-main-container">
        <AppointmentForm />
      </div>
      <div className="h-full hidden lg:block">
        <Image
          src="/images/appotmentbg.jpg"
          alt="appointment"
          width={500}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
