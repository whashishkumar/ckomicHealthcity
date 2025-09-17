import React from "react";
import PageTitle from "../../ui/PageTitle";
import Image from "next/image";

export default function AboutHospital() {
  return (
    <div className="hero-main-container">
      <div className="grid lg:grid-cols-[40%_60%] grid-cols-1 py-14">
        <Image
          src={"/images/appotmentbg.jpg"}
          alt="hospital"
          height={400}
          width={450}
          className="object-cover"
        />
        <div>
          <PageTitle
            heading="Best Weight Loss Surgery Hospital in Punjab"
            headingClass="text-4xl font-bold"
            wrapperClass="text-left"
            subHeading="Welcome to the CKOSMIC HEALTH CITY, Punjab"
            subHeadingClass="my-2  font-bold text-primary-color"
          />
          <p className="font-normal primary-font text-secondary-color">
            At CKOSMIC Health City, we understand that your weight loss journey
            is not just about losing weight; it’s about reclaiming your health,
            confidence, and quality of life. We recognize that this journey is
            deeply personal, and often filled with challenges and achievements.
            That’s why we are dedicated to offering cutting-edge medical
            treatments and the emotional and psychological support you need to
            succeed. As the Best Weight Loss Hospital in Punjab, our approach is
            holistic, ensuring that every aspect of your well-being is nurtured
            and cared for.
          </p>
          <p className="font-normal primary-font mt-8 text-secondary-color">
            Our state-of-the-art facility is designed with your comfort and
            safety in mind, equipped with the latest technology to support
            advanced surgical techniques. But what truly sets CKOSMIC Health
            City apart is our exceptional team of specialists, led by Dr. Amit
            Sood, who is widely regarded as the Best Weight Loss Surgeon in
            Punjab. Dr. Sood and his team bring a wealth of experience,
            compassion, and dedication to each patient, ensuring that you
            receive personalized care tailored to your unique needs.
          </p>
          <p className="font-bold mt-8 text-primary-color">
            At CKOSMIC Health City, your journey to a healthier, happier you is
            our top priority.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
}
