// app/news/page.tsx
"use client";
import React from "react";
import BlogCard from "../../ui/BlogCard";
import PageTitle from "../../ui/PageTitle";
import SwipeSlider from "../../ui/SwipeSlider";

const newsList = [
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

export default function HospitalNews() {
  return (
    <div className="py-14 bg-white ">
      <section className="hero-main-container">
        <PageTitle tag="Hospital news" wrapperClass=" mx-auto text-left pb-8" />
        <div className="">
          <SwipeSlider
            slidesPerView={3}
            bottomSwipeBtn={false}
            swipebtn={true}
            spaceBetween={20}
          >
            {newsList.map((news) => (
              <BlogCard key={news.id} {...news} />
            ))}
          </SwipeSlider>
        </div>
      </section>
    </div>
  );
}
