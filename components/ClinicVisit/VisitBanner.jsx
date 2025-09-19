import React from "react";
import Image from "next/image";

export default function VisitBanner() {
  return (
    <div>
      <div className="relative w-full h-[500px] lg:h-[400px]">
        <Image
          src="/images/about02.jpg"
          alt="Book Appointment Banner"
          className="object-cover object-center "
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-6 lg:px-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 primary-font banner-title">
            Book Your Appointment Today
          </h1>
          <p className="text-white text-lg  max-w-lg mb-6  primary-font">
            Connect with our experts online or visit our hospital for a walk-in
            consultation. Your health journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919876543210"
              className="contact-us-btn rounded book-appoitment-btn  primary-font"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
