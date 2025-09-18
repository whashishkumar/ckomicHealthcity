import Link from "next/link";
import React from "react";

const specialties = [
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Advanced heart care including diagnostics, interventional procedures, and cardiac surgery.",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Comprehensive healthcare for infants, children, and adolescents with specialized pediatric care.",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Expert treatment for bone, joint, and muscle disorders with advanced surgical techniques.",
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Specialized care for neurological disorders affecting the brain, spine, and nervous system.",
  },
  {
    id: "gynecology",
    name: "Gynecology",
    description:
      "Complete women's health services including maternity care and reproductive health.",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description:
      "Comprehensive eye care, including vision correction, cataract surgery, and retinal treatment.",
  },
];

export default function OurSpecialties() {
  return (
    <div className="hero-main-container">
      <div className=" mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold  mb-8">Our Medical Specialties</h1>
        <div className="space-y-10">
          {specialties.map((spec) => (
            <div key={spec.id} className="p-6 ">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {spec.name}
              </h2>
              <p className="text-gray-700 text-lg">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
