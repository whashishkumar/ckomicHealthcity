import React from "react";
import PageTitle from "../../ui/PageTitle";
import Accordion from "../../ui/Accordian";
import "./style.css";

const weightLossHighlights = [
  {
    id: 1,
    question: "Expertise You Can Trust",
    answer:
      "At CKOSMIC Health City, we pride ourselves on our team of highly skilled and experienced professionals. Led by Dr. Amit Sood, our specialists are renowned for their expertise in performing a wide range of weight loss surgeries, including gastric bypass, sleeve gastrectomy, and adjustable gastric banding. Dr. Sood’s extensive experience and dedication to patient care have earned him the reputation as the Best Weight Loss Surgeon in Punjab.",
  },
  {
    id: 2,
    question: "Comprehensive Care",
    answer:
      "Our complete approach to weight loss sets us apart as the Best Weight Loss Hospital in Punjab. We believe that successful weight loss involves more than just surgery. That’s why we offer a full spectrum of services, including nutritional counseling, psychological support, and personalized post-operative care. From your initial consultation to long-term follow-up, our team is with you every step of the way, ensuring you achieve and maintain your weight loss goals.",
  },
  {
    id: 3,
    question: "Advanced Facilities",
    answer:
      "CKOSMIC Health City is equipped with cutting-edge technology and modern facilities designed to support the highest standards of surgical care. Our hospital is dedicated exclusively to weight loss procedures, making us the Best Weight Loss Hospital for patients seeking specialized treatment. We utilize the latest minimally invasive techniques to ensure faster recovery times, reduced risk of complications, and optimal results.",
  },
  {
    id: 4,
    question: "Patient-Centered Approach",
    answer:
      "CKOSMIC Health City is equipped with cutting-edge technology and modern facilities designed to support the highest standards of surgical care. Our hospital is dedicated exclusively to weight loss procedures, making us the Best Weight Loss Hospital for patients seeking specialized treatment. We utilize the latest minimally invasive techniques to ensure faster recovery times, reduced risk of complications, and optimal results.",
  },
  {
    id: 5,
    question: "Proven Success and Patient Satisfaction",
    answer:
      "CKOSMIC Health City is equipped with cutting-edge technology and modern facilities designed to support the highest standards of surgical care. Our hospital is dedicated exclusively to weight loss procedures, making us the Best Weight Loss Hospital for patients seeking specialized treatment. We utilize the latest minimally invasive techniques to ensure faster recovery times, reduced risk of complications, and optimal results.",
  },
];

export default function WhyCokmic() {
  return (
    <div className="wrapper-whyCkocmic">
      <div className="hero-main-container">
        <div className="grid lg:grid-cols-2 py-14 gap-20">
          <div className="">
            <PageTitle
              heading="Why CKOSMIC health city is the best beight loss Hospital in Punjab."
              headingClass="text-base mb-8 capitalize"
              wrapperClass="text-left text-white "
            />
            <div>
              <Accordion faqs={weightLossHighlights} />
            </div>
          </div>
          <div>
            <PageTitle
              heading="Meet Dr. Amit Sood: The Best Weight Loss Surgeon in Punjab"
              headingClass="text-base mb-8 text-white "
            />
            <p className="font-normal primary-font text-color-for-bg">
              Dr. Amit Sood is the driving force behind CKOSMIC Health City’s
              success. As the Best Weight Loss Surgeon in Punjab, Dr. Sood
              brings years of experience, unmatched expertise, and a
              compassionate approach to patient care. He is dedicated to helping
              his patients achieve their weight loss goals through safe,
              effective, and minimally invasive surgical techniques. Under his
              leadership, CKOSMIC Health City has become the go-to destination
              for individuals seeking the highest quality of weight loss care in
              Punjab.
            </p>
            <p className="font-bold my-5 text-white">
              Take the First Step Towards a Healthier Life
            </p>
            <p className="font-normal primary-font text-color-for-bg">
              If you’re ready to embark on your weight loss journey, CKOSMIC
              Health City is here to help. As the Best Weight Loss Hospital in
              Punjab, we offer the expertise, support, and state-of-the-art
              facilities you need to achieve lasting success. Contact us today
              to schedule a consultation with Dr. Amit Sood, and discover why
              CKOSMIC Health City is the top choice for weight loss surgery in
              Punjab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
