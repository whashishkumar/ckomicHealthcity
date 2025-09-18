import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactUsCard from "../../components/ContactUsCard";
import TopCitiesSurgeon from "../../components/TopCitiesSurgeon";
import ContactUsBanner from "../../components/ContactusBanner";

export default function ContactPage() {
  return (
    <div>
      <ContactUsBanner />
      <ContactUs />
      <ContactUsCard />
      <TopCitiesSurgeon />
    </div>
  );
}
