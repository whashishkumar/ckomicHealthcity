import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";
import PageTitle from "../../ui/PageTitle";

const services = [
  {
    id: 1,
    title: "Laboratory Services",
    desc: "Comprehensive diagnostic testing delivering fast, accurate, and reliable results to support precise treatment decisions.",
    icon: "/icons/lab.png",
    link: "/services/laboratory",
  },
  {
    id: 2,
    title: "Radiology & Imaging",
    desc: "Advanced imaging solutions including X-ray, MRI, and ultrasound to support accurate diagnoses and treatment planning.",
    icon: "/icons/lab.png",
    link: "/services/radiology",
  },
  {
    id: 3,
    title: "Pharmacy Services",
    desc: "Reliable in-house pharmacy services ensuring access to authentic medications and patient counseling.",
    icon: "/icons/lab.png",
    link: "/services/pharmacy",
  },
  {
    id: 4,
    title: "Emergency Care",
    desc: "24/7 emergency medical services designed to provide quick and effective treatment during critical times.",
    icon: "/icons/lab.png",
    link: "/services/emergency",
  },
];

const getBgColor = (title) => {
  switch (title) {
    case "Laboratory Services":
      return "bg-[#ECF2FF]";
    case "Radiology & Imaging":
      return "bg-[#E4FFEA]";
    case "Pharmacy Services":
      return "bg-[#E0F7FF]";
    case "Emergency Care":
      return "bg-[#EDF2FB]";
    default:
      return "bg-white";
  }
};
export default function PatientServices() {
  return (
    <div className="services-root-wanner py-16">
      <div className="hero-main-container">
        <PageTitle
          heading="Patient Services"
          subHeading=" Comprehensive support services to ensure your comfort and convenience during your healthcare journey."
          headingClass="text-white"
          subHeadingClass="text-white mt-2 text-[22px] "
          wrapperClass="mx-auto w-full flex flex-col items-center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-16 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card relative p-6 rounded-2xl shadow-md ${getBgColor(
                service.title
              )}`}
            >
              <Image
                className="icon-wrapper-cornner"
                src="/images/serviceCornner.png"
                alt="Corner Decoration"
                width={52}
                height={52}
              />
              <div className="icon-wrapper">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>

              <div className="informartin-container-wrapper">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc mt-3">{service.desc}</p>
              </div>
              <div>
                {/* <Image
                  className="icon-btnTo-cornner object-scale-down"
                  src="/images/btnShape.png"
                  alt="Laboratory Icon"
                  width={25}
                  height={25}
                /> */}

                <Link
                  href={"#"}
                  // href={`patient-services${service.title.toLocaleLowerCase()}`}
                  className="read-more "
                >
                  Read more <FaArrowRight className="btn-icon-arrow" />
                </Link>

                {/* <Image
                  className="icon-btnleft-cornner object-scale-down"
                  src="/images/btnShape.png"
                  alt="Laboratory Icon"
                  width={25}
                  height={25}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
