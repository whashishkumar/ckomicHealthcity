"use client";
import React from "react";
import BlogCard from "../../ui/BlogCard";
import PageTitle from "../../ui/PageTitle";

const tips = [
  {
    id: 1,
    title: "New Advanced Cardiac Unit Opened",
    summary:
      "Ckosmic Health City has inaugurated a state-of-the-art cardiac unit equipped with advanced technology.",
    image: "/images/about02.jpg",
    date: "Sept 10, 2025",
    details:
      "Our new advanced cardiac care unit is designed to provide comprehensive services for heart patients, including minimally invasive procedures, emergency care, and rehabilitation programs.",
  },
  {
    id: 2,
    title: "Free Health Checkup Camp",
    summary:
      "Join our free health checkup camp this Sunday for early detection and preventive care.",
    image: "/images/about02.jpg",
    date: "Sept 14, 2025",
    details:
      "The free camp will include general checkups, blood pressure screening, diabetes tests, and nutritional counseling. Open for all residents in the community.",
  },
  {
    id: 3,
    title: "New Robotic Surgery Facility",
    summary:
      "Hospital introduces robotic-assisted surgery for greater precision and faster recovery.",
    image: "/images/about02.jpg",
    date: "Sept 18, 2025",
    details:
      "Robotic-assisted surgery allows doctors to perform complex procedures with enhanced precision, fewer complications, and reduced recovery time for patients.",
  },
  {
    id: 12,
    title: "Free Health Checkup Camp",
    summary:
      "Join our free health checkup camp this Sunday for early detection and preventive care.",
    image: "/images/about02.jpg",
    date: "Sept 14, 2025",
    details:
      "The free camp will include general checkups, blood pressure screening, diabetes tests, and nutritional counseling. Open for all residents in the community.",
  },
  {
    id: 13,
    title: "New Robotic Surgery Facility",
    summary:
      "Hospital introduces robotic-assisted surgery for greater precision and faster recovery.",
    image: "/images/about02.jpg",
    date: "Sept 18, 2025",
    details:
      "Robotic-assisted surgery allows doctors to perform complex procedures with enhanced precision, fewer complications, and reduced recovery time for patients.",
  },
];

export default function PreventiveHealthTips() {
  return (
    <div className="py-14 bg-white">
      <section className="hero-main-container">
        <PageTitle
          tag="Healthcare"
          heading="Preventive Healthcare Tips"
          headingClass="text-4xl font-bold  my-4 "
          wrapperClass=" mx-auto text-left "
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center"></h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tips) => (
            <BlogCard key={tips.id} {...tips} />
          ))}
        </div>
      </section>
    </div>
  );
}
