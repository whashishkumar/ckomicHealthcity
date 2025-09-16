import React from "react";
import "./style.css";
import PageTitle from "../../ui/PageTitle";
import Specialties from "./Specialties";
const stats = [
  {
    count: "7.4K+",
    description: "Tests & Patients Served in 2024",
  },
  {
    count: "98%",
    description: "Client Satisfaction Rate for Services",
  },
  {
    count: "1.1K+",
    description: "Free Patient Visits Done Each Month",
  },
];

export default function OurMedicalSpecialities() {
  return (
    <div className="our-specialities-wrapper py-16">
      <div className="hero-main-container">
        <PageTitle
          heading="Our Medical Specialties"
          subHeading="Comprehensive healthcare services across multiple specialties with expert medical professionals."
          headingClass="text-white"
          subHeadingClass="text-white lg:max-w-[45%] sm:max-w-[100%]  max-w-[100%] mt-2 text-[22px] text-color"
          wrapperClass="mx-auto"
        />
        <Specialties />
        <div className="client-Satisfaction-Rate gap-10 lg:gap-[80px] md:gap-17 pt-16">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center flex items-end">
              <h2 className="rate-count mr-2 align-middl ">{item.count}</h2>
              <p className="rate-desceraption align-middle ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
