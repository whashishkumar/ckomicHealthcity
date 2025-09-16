import AboutCkomic from "../components/AboutCkomic";
import HeroSection from "../components/HeroBanner";
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
    </>
  );
}
