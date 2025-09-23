import Image from "next/image";
import React from "react";
const specialties = [
  {
    id: 1,
    icon: "/icons/lab.png",
    title: "Cardiology",
    description:
      "Advanced heart care including diagnostics, interventional procedures, and cardiac surgery.",
  },
  {
    id: 2,
    icon: "/icons/lab.png",
    title: "Pediatrics",
    description:
      "Comprehensive healthcare for infants, children, and adolescents with specialized pediatric care.",
  },
  {
    id: 3,
    icon: "/icons/lab.png",
    title: "Orthopedics",
    description:
      "Expert treatment for bone, joint, and muscle disorders with advanced surgical techniques.",
  },
  {
    id: 4,
    icon: "/icons/lab.png",
    title: "Neurology",
    description:
      "Specialized care for neurological disorders affecting the brain, spine, and nervous system.",
  },
  {
    id: 5,
    icon: "/icons/lab.png",
    title: "Gynecology",
    description:
      "Complete women's health services including maternity care and reproductive health.",
  },
  {
    id: 6,
    icon: "/icons/lab.png",
    title: "Ophthalmology",
    description:
      "Advanced eye care services including surgery and treatment for various eye conditions.",
  },
];

export default function Specialties() {
  return (
    <section className="py-16">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialties.map((item, idx) => (
            <React.Fragment key={item.id}>
              <div
                className={`
  flex flex-col gap-3 pb-6 pr-6
  border-b border-[#A7E4F2] lg:border-b-0
  ${(idx + 1) % 3 !== 0 ? "lg:border-r border-[#A8BAB2]" : ""}

`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <h3 className="our-specialities-title">{item.title}</h3>
                <p className="our-specialities-desc">{item.description}</p>
                <a
                  href={`/our-specialities/${item.title.toLocaleLowerCase()}`}
                  className="mt-2 our-specialities-readMore"
                >
                  Read More →
                </a>
              </div>

              {/* Bottom border after first row on desktop only */}
              {idx + 1 === 3 && (
                <div className="hidden lg:block col-span-3 border-b border-[#A8BAB2] mt-6"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
