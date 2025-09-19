import React from "react";
import WellnessArticles from "../../components/WellnessArticles";
import PreventiveHealthTips from "../../components/HealthcareTips";
import HospitalNews from "../../components/HospitalNews";
import BannerPage from "../../components/Banner";
import Testimonial from "../../components/Testimonials";
import TopCitiesSurgeon from "../../components/TopCitiesSurgeon";

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
    etc. ....`,
  },
];
export default function Blogs() {
  return (
    <div>
      <BannerPage bannerPageData={contactBanners} />
      <HospitalNews />
      <WellnessArticles />
      <PreventiveHealthTips />
      <Testimonial />
      <TopCitiesSurgeon />
    </div>
  );
}
