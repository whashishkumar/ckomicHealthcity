import React from "react";
import AboutHospital from "../../../components/AboutHospital";
import WhyCokmic from "../../../components/WhyCkocmic";
import TestimonyGallery from "../../../components/TestimonyGallery";
import AboutSurgeon from "../../../components/AboutSurgeon";
import AboutFaq from "../../../components/AboutFAQ";
import Reviews from "../../../components/Reviews";
import Location from "../../../components/Location";
import Testimonial from "../../../components/Testimonials";
import TopCitiesSurgeon from "../../../components/TopCitiesSurgeon";

// /best-weight-loss-surgery-hospital-in-punjab/

const faqs = [
  {
    question: "How can I book an appointment online ?",
    answer:
      "You can easily book an appointment by filling out our online form. Simply provide your details, select a service, and choose your preferred date and time.",
  },
  {
    question: "What services do you provide ?",
    answer:
      "We offer a wide range of healthcare services including general consultations, dental care, cardiology, and therapy sessions.",
  },
  {
    question: "How can I book an appointment online ?",
    answer:
      "You can easily book an appointment by filling out our online form. Simply provide your details, select a service, and choose your preferred date and time.",
  },
  {
    question: "What services do you provide ?",
    answer:
      "We offer a wide range of healthcare services including general consultations, dental care, cardiology, and therapy sessions.",
  },
  {
    question: "How can I book an appointment online ?",
    answer:
      "You can easily book an appointment by filling out our online form. Simply provide your details, select a service, and choose your preferred date and time.",
  },
];

const faqPageTitle = {
  tag: "FAQ's",
  heading: "Frequently Asked Question",
  headingClass: "text-4xl font-bold mt-4  text-white",
  wrapperClass: "max-w-3xl text-left",
  tagClass: "text-white",
};
export default function About() {
  return (
    <div>
      <AboutHospital />
      <WhyCokmic />
      <TestimonyGallery />
      <Testimonial />
      <AboutSurgeon />
      <AboutFaq faqs={faqs} faqPageTitle={faqPageTitle} />
      <Location />
      <Reviews />
      <TopCitiesSurgeon />
    </div>
  );
}
