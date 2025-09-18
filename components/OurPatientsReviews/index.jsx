"use client";
import React from "react";
import PageTitle from "../../ui/PageTitle";
import "./style.css";
import Image from "next/image";
import SwipeSlider from "../../ui/SwipeSlider";

export const reviews = [
  {
    id: 1,
    image: "/images/doctor.png",
    text: "Diagnosy always help to provide proper are treatment for most of get the proper cure and health life which is the more an over that reason what should be care a lot about your health more perfect over that reason what should be care a lot about your health more perfect Diagnosy always help to provide proper are treatment for  most of get the proper cure and health life which is the more an over that reason",
    author: "Roberto Carlos",
    occupation: "Civil Engineer",
  },
  {
    id: 2,
    image: "/images/doctor.png",
    text: "Diagnosy always help to provide proper are treatment for most of get the proper cure and health life which is the more an over that reason what should be care a lot about your health more perfect over that reason what should be care a lot about your health more perfect Diagnosy always help to provide proper are treatment for  most of get the proper cure and health life which is the more an over that reason",
    author: "Jane Smith",
    occupation: "Doctor",
  },
  {
    id: 3,
    image: "/images/doctor.png",
    text: "Diagnosy always help to provide proper are treatment for most of get the proper cure and health life which is the more an over that reason what should be care a lot about your health more perfect over that reason what should be care a lot about your health more perfect Diagnosy always help to provide proper are treatment for  most of get the proper cure and health life which is the more an over that reason",
    author: "David Johnson",
    occupation: "Teacher",
  },
  {
    id: 4,
    image: "/images/doctor.png",
    text: "Diagnosy always help to provide proper are treatment for most of get the proper cure and health life which is the more an over that reason what should be care a lot about your health more perfect over that reason what should be care a lot about your health more perfect Diagnosy always help to provide proper are treatment for  most of get the proper cure and health life which is the more an over that reason",
    author: "Maria Garcia",
    occupation: "Entrepreneur",
  },
];

export default function OurPatientsReviews() {
  return (
    <div className="hero-main-container our-patients-bg">
      <div className="py-16">
        <PageTitle
          tag="Testimonials"
          tagClass="tag-style"
          heading="Our Patients Say about our Services"
          headingClass="review-title-heading w-full md:w-full lg:w-[35%] mt-4"
          wrapperClass="mx-auto"
        />
        <div className="testimonials-reviews mt-5 grid grid-cols-1 md:grid-cols-[30%_60%] lg:grid-cols-[30%_60%] gap-10">
          <div className="review-img-container relative">
            <Image
              src="/images/doctor.png"
              alt="test"
              height={538}
              width={583}
              className="object-cover rounded-[10px] w-full h-full"
            />
            <p className="happy-patients-tag">🙂 8K+ Happy Patients</p>
          </div>

          <div className="review-secion flex flex-col py-14">
            <SwipeSlider
              slidesPerView={1}
              spaceBetween={30}
              autoPlay={true}
              textQuort={true}
              bottomSwipeBtn={true}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="review-section flex flex-col gap-4"
                >
                  <div className="py-12">
                    <p className="client-review">{review.text}</p>
                    <p className="author-name  mt-4">{review.author}</p>
                    <span className="author-occupation mt-2">
                      {review.occupation}
                    </span>
                  </div>
                </div>
              ))}
            </SwipeSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
