import React from "react";
import PageTitle from "../../ui/PageTitle";
import Accordion from "../../ui/Accordian";
import "./style.css";

export default function FAQ({ faqs, faqPageTitle }) {
  const { title, section_name } = faqPageTitle || {};
  const chunkSize = faqs?.length / 2;
  const faq1 = faqs?.slice(0, chunkSize);
  const faq2 = faqs?.slice(0, chunkSize);

  return (
    <div className="faq-container-wrappwer">
      <div className="hero-main-container">
        <div className="py-16">
          <PageTitle
            tag={section_name}
            heading={title}
            headingClass="text-4xl font-bold mt-4 blog-title-banner"
            wrapperClass="max-w-3xl  text-left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10  md:gap-5 gap-5 py-12">
            <Accordion faqs={faq1} />
            <Accordion faqs={faq2} />
          </div>
        </div>
      </div>
    </div>
  );
}
