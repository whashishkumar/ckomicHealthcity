import AboutCkomic from "../components/AboutCkomic";
import AppointmentBooking from "../components/BookAppointment";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroBanner";
import OurBlog from "../components/OurBlog";
import OurDoctors from "../components/OurDoctors";
import OurMedicalSpecialities from "../components/OurMedicalSpecialties";
import OurPatientsReviews from "../components/OurPatientsReviews";
import PatientServices from "../components/PatientServices";

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutCkomic />
      <PatientServices />
      <OurDoctors />
      <OurMedicalSpecialities />
      <OurPatientsReviews />
      <AppointmentBooking />
      <OurBlog />
      <FAQ />
    </>
  );
}
