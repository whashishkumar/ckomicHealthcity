"use client";
import { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { GrFormDown } from "react-icons/gr";
import "./style.css";

export default function Accordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs?.map((faq, idx) => (
        <div key={idx} className="accordian-bg rounded-lg shadow">
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left accordian-question hover:cursor-pointer"
            onClick={() => toggleAccordion(idx)}
          >
            {faq.question}
            {openIndex === idx ? (
              <MdExpandLess className="w-6 h-6" />
            ) : (
              <GrFormDown className="w-6 h-6" />
            )}
          </button>
          {openIndex === idx && (
            <div className="px-6 py-4 pb-5 faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
