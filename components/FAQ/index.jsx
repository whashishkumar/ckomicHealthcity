import React from "react";
import PageTitle from "../../ui/PageTitle";
import Accordion from "../../ui/Accordian";
import "./style.css";

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
];
export default function FAQ() {
  return (
    <div className="faq-container-wrappwer">
      <div className="hero-main-container">
        <div className="py-16">
          <PageTitle
            tag={"FAQ's"}
            heading="Frequently Asked Question"
            headingClass="text-4xl font-bold mt-4 faq-header-title-text"
            wrapperClass="max-w-3xl  text-left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10  md:gap-5 gap-5 py-12">
            <Accordion faqs={faqs} />
            <Accordion faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
