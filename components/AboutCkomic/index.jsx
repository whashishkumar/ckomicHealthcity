"use client";
import Image from "next/image";
import "./style.css";
import PageTitle from "../../ui/PageTitle";
import Link from "next/link";
import { useAboutContext } from "../../context/AboutContext";
import { useEffect } from "react";

export default function AboutCkomic() {
  const { aboutUsDetail, loading, fetchBannerPageAboutInfo } =
    useAboutContext();

  const { page, page_content } = aboutUsDetail?.data || {};
  const { section_name, title } = page || {};
  const { description, images, button_link } = page_content || {};
  useEffect(() => {
    fetchBannerPageAboutInfo();
  }, []);

  return (
    <section className="py-16 aboutCkomic-wrapper">
      <div className="hero-main-container  grid lg:grid-cols-[55%_40%] gap-5 items-center">
        <div className="relative grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_55%] gap-5">
          <div className="about-image-col-1">
            {images && (
              <Image
                src={images?.image__1}
                alt="Doctor"
                width={339}
                height={373}
                className="object-cover w-full h-full rounded-2xl"
              />
            )}
          </div>
          <div className="about-image-col-2">
            {images && (
              <Image
                src={images?.image_2}
                alt="Nurses with patient"
                width={423}
                height={504}
                className="object-cover w-full h-full rounded-2xl"
              />
            )}
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
            tag={section_name}
            heading={title}
            headingClass="text-4xl font-bold text-blue-700 mt-4 title-cosmic "
            wrapperClass="max-w-3xl mx-auto text-left"
          />
          <p className="leading-relaxed about-cosmic-desc whitespace-pre-line pb-8">
            {description}
          </p>
          <Link
            href={"/about-us"}
            className="px-6 py-3  about-learn-btn secondary-font mt-6"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
