"use client";
import { useState } from "react";
import { FaStar, FaCheckCircle, FaGoogle } from "react-icons/fa";
import React from "react";
import PageTitle from "../../ui/PageTitle";
import SwipeSlider from "../../ui/SwipeSlider";

const reviews = [
  {
    id: 1,
    name: "Jasmeen Kaur",
    date: "2025-01-07",
    rating: 5,
    verified: true,
    platform: "Google",
    avatar: "/images/doctor.png",
    review: `Hello guys. 
I m jasmeen kaur. I was obese and my weight was around 124 at the age of just 26. I belong to Punjab and my life changed completely after the surgery. Dr. Amit Sood guided me throughout and now I feel healthier and more confident.`,
  },
  {
    id: 2,
    name: "John Doe",
    date: "2025-01-05",
    rating: 4,
    verified: true,
    platform: "Google",
    avatar: "/images/doctor.png",
    review: `Great experience overall. The staff was very supportive and professional. The process was smooth and I am very satisfied with the results.`,
  },
  {
    id: 3,
    name: "Jasmeen Kaur",
    date: "2025-01-07",
    rating: 5,
    verified: true,
    platform: "Google",
    avatar: "/images/doctor.png",
    review: `I was obese and my weight was around 124 at the age of just 26. With the support of the hospital and Dr. Sood, I lost significant weight. It has been life-changing!`,
  },
  {
    id: 4,
    name: "John Doe",
    date: "2025-01-05",
    rating: 4,
    verified: true,
    platform: "Google",
    avatar: "/images/doctor.png",
    review: `Very good experience. I would recommend this clinic to anyone looking for professional weight-loss treatments.`,
  },
  {
    id: 5,
    name: "Jasmeen Kaur",
    date: "2025-01-07",
    rating: 5,
    verified: true,
    platform: "Google",
    avatar: "/images/doctor.png",
    review: `I was obese and my weight was around 124 at the age of just 26. With the support of the hospital and Dr. Sood, I lost significant weight. It has been life-changing!`,
  },
];

function ReviewCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  const shortText = item.review.slice(0, 60);
  const isLong = item.review.length > 60;

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 lg:w-[300px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900 primary-font">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500 primary-font">{item.date}</p>
          </div>
        </div>
        {item.platform === "Google" && (
          <FaGoogle className="text-2xl text-[#4285F4]" />
        )}
      </div>
      <div className="flex items-center gap-2 mt-3">
        {[...Array(item.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {item.verified && <FaCheckCircle className="text-blue-500 ml-1" />}
      </div>

      {/* Review Text */}
      <p className="mt-3 text-gray-700 text-sm leading-relaxed primary-font">
        {expanded ? item.review : shortText}
        {!expanded && isLong && "..."}
      </p>

      {/* Read More / Less */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm font-medium text-gray-800 hover:underline hover:cursor-pointer primary-font"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="reviews-wrapper bg-white">
      <div className="hero-main-container">
        <div className="py-14">
          <PageTitle heading={"reviews"} headingClass="text-center" />
          <div className="mt-6">
            <SwipeSlider
              slidesPerView={4}
              bottomSwipeBtn={false}
              swipebtn={true}
              spaceBetween={20}
            >
              {reviews.map((item) => (
                <ReviewCard key={item.id} item={item} />
              ))}
            </SwipeSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
