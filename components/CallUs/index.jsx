import React from "react";

export default function CallUs() {
  return (
    <div>
      <section className="bg-color-wrapper py-12 lg:py-17 text-center text-white">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 primary-font">
          Ready to Start Your Health Journey?
        </h3>
        <p className="text-base primary-font my-8">
          Call us or visit the hospital to book your appointment today.
        </p>
        <a
          href="tel:+919876543210"
          className="bg-white rounded py-3 px-8 book-appoitment-btn primary-font "
        >
          Call Now
        </a>
      </section>
    </div>
  );
}
