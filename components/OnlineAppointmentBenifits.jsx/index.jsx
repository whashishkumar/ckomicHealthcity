import React from "react";

const benefits = [
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description: "Pick a time that suits your busy schedule.",
  },
  {
    icon: "👩‍⚕️",
    title: "Expert Doctors",
    description: "Consult with trusted specialists in each field.",
  },
  {
    icon: "💻",
    title: "Easy Process",
    description: "Book online in just a few clicks, no hassle.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your personal data is safe & confidential.",
  },
];

export default function BenifitsOnlineAppointment() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white-900 p-6 rounded-xl shadow ">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-semibold mt-4 primary-font text-primary-color">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm primary-font text-secondary-color">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
