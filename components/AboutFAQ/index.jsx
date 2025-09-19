import React from "react";
import PageTitle from "../../ui/PageTitle";
import Accordion from "../../ui/Accordian";
import "./style.css";

export default function AboutFaq({ faqPageTitle, faqs }) {
  return (
    <div className="Aboutfaq-container-wrappwer">
      <div className="hero-main-container">
        <div className="py-16">
          <PageTitle {...faqPageTitle} />
          <div className="grid grid-cols-1 lg:gap-10  md:gap-5 gap-5 py-12">
            <Accordion faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
