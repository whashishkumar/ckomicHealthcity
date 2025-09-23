"use client";
import React from "react";

const departments = [
  {
    category: "Cardiology",
    description:
      "The Cardiology department at Health City Hospital provides world-class cardiac care for all heart-related conditions. Our team of cardiologists and cardiac surgeons combine expertise with advanced technology to offer comprehensive care.",
    services: {
      invasive: [
        "Coronary & Peripheral Angiography",
        "Right & Left Heart Catheterization",
        "PTCA & Stenting (Single & Multi Vessel)",
        "Primary PCI",
        "Balloon Valvuloplasty",
        "Peripheral Renal & Carotid Angioplasty & Stenting",
        "Implantable Cardioverter Defibrillator implantation",
        "EP Study & RF Ablation",
        "Biventricular Pacemaker Implantation",
        "Device Closure of ASD & PDA",
        "Permanent Pacemaker Implantation",
        "Special ICCU Care",
        "24x7 Heart Emergency & Primary Angioplasty",
      ],
      nonInvasive: [
        "ECG",
        "Echocardiography with Colour Doppler",
        "Stress Echocardiography",
        "Treadmill Test",
        "Holter Monitoring",
        "TEE",
      ],
    },
    doctors: ["Dr. Amit Sood", "Dr. Richa Sharma"],
    emergencyAvailability: true,
  },

  {
    category: "Pediatrics",
    description:
      "Our Pediatrics department provides specialized care for infants, children, and adolescents, ensuring their health and well-being.",
    services: {
      generalCare: [
        "Neonatal Care",
        "Vaccinations",
        "Growth & Development Monitoring",
        "Well Child Checkups",
      ],
      specialtyCare: [
        "Pediatric Surgery",
        "Pediatric Cardiology",
        "Pediatric Neurology",
      ],
    },
    doctors: ["Dr. Priya Mehta", "Dr. Rohit Singh"],
    emergencyAvailability: true,
  },

  {
    category: "Orthopedics",
    description:
      "The Orthopedics department treats musculoskeletal problems including fractures, joint disorders, and sports injuries with advanced surgical and non-surgical care.",
    services: {
      surgical: [
        "Joint Replacement",
        "Arthroscopy",
        "Spine Surgery",
        "Trauma Surgery",
      ],
      nonSurgical: [
        "Physiotherapy",
        "Sports Injury Rehabilitation",
        "Pain Management",
      ],
    },
    doctors: ["Dr. Karan Patel", "Dr. Sunita Rao"],
    emergencyAvailability: false,
  },

  {
    category: "Neurology",
    description:
      "Our Neurology department diagnoses and treats nervous system disorders such as stroke, epilepsy, and neurodegenerative diseases with comprehensive care.",
    services: {
      diagnostic: ["EEG", "MRI & CT Brain Scans", "Neurophysiology Tests"],
      treatment: [
        "Stroke Management",
        "Epilepsy Care",
        "Neurodegenerative Disease Care",
        "Headache Clinic",
        "Neurorehabilitation",
      ],
    },
    doctors: ["Dr. Anil Kumar", "Dr. Meera Joshi"],
    emergencyAvailability: true,
  },
  {
    category: "Gynecology",
    description:
      "The Gynecology department provides comprehensive healthcare for women, including preventive care, diagnosis, and treatment of reproductive system disorders. We focus on maternal health, fertility, and minimally invasive procedures.",
    services: {
      surgeries: [
        "Hysterectomy (Open & Laparoscopic)",
        "Myomectomy",
        "C-Section",
        "Laparoscopic Gynecologic Surgery",
        "Ovarian Cystectomy",
      ],
      diagnostics: [
        "Ultrasound & Sonography",
        "Pap Smear & Cervical Screening",
        "Hormonal & Fertility Testing",
        "Colposcopy",
        "Mammography",
      ],
      maternalCare: [
        "Antenatal Care",
        "Postnatal Care",
        "High-Risk Pregnancy Management",
        "Labor & Delivery Services",
      ],
    },
    doctors: ["Dr. Ananya Sharma", "Dr. Priya Verma"],
    emergencyAvailability: true,
  },

  {
    category: "Ophthalmology",
    description:
      "The Ophthalmology department offers advanced eye care services, treating all eye diseases and providing vision correction solutions.",
    services: {
      surgeries: [
        "Cataract Surgery",
        "LASIK",
        "Glaucoma Surgery",
        "Retina Surgery",
      ],
      diagnostics: [
        "Comprehensive Eye Exams",
        "Pediatric Ophthalmology",
        "Corneal & Retinal Imaging",
      ],
    },
    doctors: ["Dr. Rakesh Malhotra", "Dr. Neha Verma"],
    emergencyAvailability: false,
  },
];

export default function OurSpecialties({ slug }) {
  const currentDepartment = departments.find(
    (dept) => dept.category.toLocaleLowerCase() === slug
  );

  return (
    <>
      <div className="hero-main-container">
        <div className="py-10">
          <h1 className="text-3xl font-bold mb-6 text-center capitalize">
            {slug} Departments
          </h1>

          {/* Department Details */}
          {currentDepartment && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                {currentDepartment.category}
              </h2>
              <p className="text-gray-700">{currentDepartment.description}</p>

              {/* Services */}
              <div className="space-y-4">
                {Object.entries(currentDepartment.services).map(
                  ([serviceCategory, serviceList]) => (
                    <div key={serviceCategory}>
                      <h3 className="text-xl font-semibold capitalize mb-2">
                        {serviceCategory.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {serviceList.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              {/* Doctors */}
              {currentDepartment.doctors &&
                currentDepartment.doctors.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Doctors</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {currentDepartment.doctors.map((doctor, index) => (
                        <li key={index}>{doctor}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Emergency Availability */}
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full font-medium text-sm ${
                    currentDepartment.emergencyAvailability
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {currentDepartment.emergencyAvailability
                    ? "Emergency Available"
                    : "No Emergency"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
