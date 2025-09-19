import AboutCkomic from "../components/AboutCkomic";
import AppointmentBooking from "../components/BookAppointment";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroBanner";
import OurBlog from "../components/OurBlog";
import OurDoctors from "../components/OurDoctors";
import OurMedicalSpecialities from "../components/OurMedicalSpecialties";
import OurPatientsReviews from "../components/OurPatientsReviews";
import PatientServices from "../components/PatientServices";

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

const faqPageTitle = {
  tag: "FAQ's",
  heading: "Frequently Asked Question",
  headingClass: "text-4xl font-bold mt-4 faq-header-title-text",
  wrapperClass: "max-w-3xl text-left",
};

const doctorTypes = [
  { id: 1, name: "All Doctors" },
  { id: 2, name: "neurologist" },
  { id: 3, name: "dermatologist" },
  { id: 4, name: "orthopedic" },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Elora Williams",
    speciality: "Cardiology",
    qualification: "MD Cardiology, AIIMS Delhi",
    experience: 15,
    timings: "Mon-Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "All Doctors",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    speciality: "Neurologist",
    qualification: "DM Neurology, PGI Chandigarh",
    experience: 12,
    timings: "Mon-Sat: 10AM–6PM",
    image: "/images/doctor.png",
    type: "neurologist",
  },
  {
    id: 3,
    name: "Dr. Aisha Khan",
    speciality: "Dermatologist",
    qualification: "MD Dermatology, AIIMS Delhi",
    experience: 8,
    timings: "Tue-Sun: 11AM–7PM",
    image: "/images/doctor.png",
    type: "dermatologist",
  },
  {
    id: 4,
    name: "Dr. Rajiv Kapoor",
    speciality: "Orthopedic",
    qualification: "MS Orthopedics, AIIMS Delhi",
    experience: 18,
    timings: "Mon-Fri: 9AM–5PM",
    image: "/images/doctor.png",
    type: "orthopedic",
  },
];

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutCkomic />
      <PatientServices />
      <OurDoctors doctors={doctors} doctorTypes={doctorTypes} />
      <OurMedicalSpecialities />
      <OurPatientsReviews />
      <AppointmentBooking />
      <OurBlog />
      <FAQ faqs={faqs} faqPageTitle={faqPageTitle} />
    </>
  );
}
