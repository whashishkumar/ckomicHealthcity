import React from "react";
import ContactForm from "./ContactUsForm";
import HealthCityAddress from "../HealthCityAddress";
import "./style.css";
export default function ContactUs() {
  return (
    <div className="contactUsWrapper bg-white">
      <div className="hero-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-50 py-14">
          <div className="flex items-center">
            <HealthCityAddress />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
