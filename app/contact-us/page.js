import React from "react";
import ContactUs from "../../components/ContactUs";
import ContactUsCard from "../../components/ContactUsCard";
import TopCitiesSurgeon from "../../components/TopCitiesSurgeon";

import Banner from "../../components/Banner";

const contactBanners = [
  {
    id: 1,
    image: "/images/Contact-us-banner.webp",
    tag: "Contact us",
    subHeading: `Ckosmic Health City, Moga is the base center of Dr. Amit Sood where
    all types of bariatric/ weight loss surgeries are performed. The
    center is equipped with ultra modern high definition operation
    theatre and world class rooms. At Ckosmic Health City Moga other
    than Bariatric/weight loss surgery, Laparoscopic surgery for
    different types of hernias, fibroids, gallbladder, kidney removal
    etc. .... are also performed.`,
    buttonLabel: "Book Appointment",
  },
];
export default function ContactPage() {
  return (
    <div>
      <Banner bannerPageData={contactBanners} />
      <ContactUs />
      <ContactUsCard />
      <TopCitiesSurgeon />
    </div>
  );
}
