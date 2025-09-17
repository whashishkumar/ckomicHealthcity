"use client";
import Image from "next/image";
import "./style.css";
import PageTitle from "../../ui/PageTitle";

export default function AboutCkomic() {
  return (
    <section className="py-16 aboutCkomic-wrapper">
      <div className="hero-main-container  grid lg:grid-cols-[55%_40%] gap-5 items-center">
        <div className="relative grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_55%] gap-5">
          <div className="about-image-col-1">
            <Image
              src="/images/aboutk01.png"
              alt="Doctor"
              width={339}
              height={373}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="about-image-col-2">
            <Image
              src="/images/about02.jpg"
              alt="Nurses with patient"
              width={423}
              height={504}
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="experience-logo bg-white rounded-full w-36 h-36 flex items-center justify-center shadow-lg ">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">15+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 self-start">
          <PageTitle
            tag="Who we are"
            heading="About Ckosmic Health"
            headingClass="text-4xl font-bold text-blue-700 mt-4 title-cosmic "
            wrapperClass="max-w-3xl mx-auto text-left "
          />
          <p className="leading-relaxed about-cosmic-desc">
            At Ckosmic Health, we believe healthcare goes beyond treatment— it’s
            about building trust, fostering wellness, and inspiring healthier
            living. With a focus on innovation, compassion, and excellence, we
            provide comprehensive healthcare services tailored to individual
            needs.
          </p>
          <p className="about-cosmic-desc leading-relaxed ">
            We are driven by the vision of creating a healthier future where
            quality care is accessible to everyone, anytime, anywhere.
          </p>
          <button className="px-6 py-3  about-learn-btn secondary-font mt-6">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
