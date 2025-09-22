import React from "react";
import AboutSurgeon from "../../../../components/AboutSurgeon";
import Location from "../../../../components/Location";
import Banner from "../../../../components/Banner";
import AppointmentBooking from "../../../../components/BookAppointment";
import AboutFaq from "../../../../components/AboutFAQ";
import TopCitiesSurgeon from "../../../../components/TopCitiesSurgeon";
import Reviews from "../../../../components/Reviews";

const contactBanners = [
  {
    id: 1,
    image: "/images/Contact-us-banner.webp",
    tag: "About us",
    subHeading: `Ckosmic Health City, Moga is the base center of Dr. Amit Sood where
    all types of bariatric/ weight loss surgeries are performed. The
    center is equipped with ultra modern high definition operation
    theatre and world class rooms. At Ckosmic Health City Moga other
    than Bariatric/weight loss surgery, Laparoscopic surgery for
    different types of hernias, fibroids, gallbladder, kidney removal
    etc. .... are also performed.`,
  },
];

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
export default function DoctorDetailPage({ params }) {
  return (
    <div>
      <Banner bannerPageData={contactBanners} />
      <AboutSurgeon />
      <AppointmentBooking />
      <Location />
      <AboutFaq faqs={faqs} faqPageTitle={faqPageTitle} />
      <Reviews />
      <TopCitiesSurgeon />
    </div>
  );
}
