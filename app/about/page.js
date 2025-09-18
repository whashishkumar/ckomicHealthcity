import React from "react";
import AboutHospital from "../../components/AboutHospital";
import WhyCokmic from "../../components/WhyCkocmic";
import TestimonyGallery from "../../components/TestimonyGallery";
import AboutSurgeon from "../../components/AboutSurgeon";
import AboutFaq from "../../components/AboutFAQ";
import Reviews from "../../components/Reviews";
import Location from "../../components/Location";
import Testimonial from "../../components/Testimonials";
import TopCitiesSurgeon from "../../components/TopCitiesSurgeon";

// /best-weight-loss-surgery-hospital-in-punjab/
export default function About() {
  return (
    <div>
      <AboutHospital />
      <WhyCokmic />
      <TestimonyGallery />
      <Testimonial />
      <AboutSurgeon />
      <AboutFaq />
      <Location />
      <Reviews />

      <TopCitiesSurgeon />
    </div>
  );
}
