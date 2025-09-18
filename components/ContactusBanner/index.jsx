"use client";
import React from "react";
import Image from "next/image";
import PageTitle from "../../ui/PageTitle";

export default function ContactUsBanner() {
  return (
    <div className="relative lg:w-full h-[400px] ">
      <Image
        src="/images/Contact-us-banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="hero-main-container">
        <div className="absolute inset-0 flex items-center">
          <div className=" px-12 md:px-12 text-left text-white space-y-4">
            <PageTitle
              tag="Contact us"
              subHeading=" Ckosmic Health City, Moga is the base center of Dr. Amit Sood where
            all types of bariatric/ weight loss surgeries are performed. The
            center is equipped with ultra modern high definition operation
            theatre and world class rooms. At Ckosmic Health City Moga other
            than Bariatric/weight loss surgery, Laparoscopic surgery for
            different types of hernias, fibroids, gallbladder, kidney removal
            etc. .... are also performed."
              tagClass="text-white"
              wrapperClass="max-w-3xl mx-auto text-left "
              subHeadingClass="text-white mt-4"
            />
            <button className="contact-us-btn">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
