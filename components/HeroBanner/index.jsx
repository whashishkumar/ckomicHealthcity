"use client";
import React from "react";
import "./style.css";

export default function HeroSection() {
  return (
    <div className="">
      <section className="relative  min-h-[670px] overflow-hidden rounded-b-[50px] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/bannerbgv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 opacity-65" />
        <div className=" sub-container relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[650px] mx-auto">
          <div className="text-white space-y-6 left-col pt-36">
            <h1 className="font-bold leading-tight banner-title">
              Ckosmic Health, Redefining Care, Inspiring Wellness
            </h1>
            <p className="text-white banner-sub-title">
              At Ckosmic Health, we blend advanced medical expertise with
              compassionate care to empower healthier lives. We deliver trusted
              solutions, innovative treatments, and personalized support for
              every step of the journey.
            </p>
            <button className=" px-6 py-3 rounded-lg text-white  flex items-center gap-2 meet-doctor-btn font-normal ">
              <span>👨‍⚕️</span> Meet Our Doctors
            </button>
          </div>
          <div className="text-white right-col flex flex-col gap-[20] pt-36">
            <div className=" bottom-border-line flex gap-[10px] pb-3 ">
              <span className="font-bold title-count title-count">500+</span>
              <p className="text-white flex items-end-safe title-count-text">
                Happy Patients
              </p>
            </div>
            <div className="bottom-border-line flex gap-[10px] pb-3">
              <span className="font-bold title-count">15+</span>
              <p className="text-white flex items-end-safe title-count-text">
                Specialties
              </p>
            </div>
            <div className="  bottom-border-line flex gap-[10px] pb-3">
              <span className="font-bold title-count">25+</span>
              <p className="text-white flex items-end-safe ">Expert Doctors</p>
            </div>
            <div className=" flex">
              <span className="font-bold title-count">24/7</span>
              <p className="text-white flex items-end-safe title-count-text">
                Emergency Care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
