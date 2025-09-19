"use client";
import React, { useState } from "react";
import BlogCard from "../../ui/BlogCard";
import PageTitle from "../../ui/PageTitle";
import Pagination from "../../ui/Pagination"; // 👈 import pagination

const articles = [
  {
    id: 10,
    title: "New Advanced Cardiac Unit Opened",
    summary:
      "Ckosmic Health City has inaugurated a state-of-the-art cardiac unit equipped with advanced technology.",
    image: "/images/about02.jpg",
    date: "Sept 10, 2025",
    details:
      "Our new advanced cardiac care unit is designed to provide comprehensive services for heart patients, including minimally invasive procedures, emergency care, and rehabilitation programs.",
  },
  {
    id: 20,
    title: "Free Health Checkup Camp",
    summary:
      "Join our free health checkup camp this Sunday for early detection and preventive care.",
    image: "/images/about02.jpg",
    date: "Sept 14, 2025",
    details:
      "The free camp will include general checkups, blood pressure screening, diabetes tests, and nutritional counseling. Open for all residents in the community.",
  },
  {
    id: 30,
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

export default function WellnessArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="py-14 bg-color-wrapper">
      <section className="hero-main-container">
        <PageTitle
          tag="Articles"
          heading="Wellness Articles"
          headingClass="text-4xl font-bold text-white my-4 "
          wrapperClass="mx-auto text-left"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
  );
}
