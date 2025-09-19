"use client";
import React from "react";
import Image from "next/image";
import PageTitle from "../../ui/PageTitle";

function Banner({ banner }) {
  return (
    <div className="relative lg:w-full h-[400px]">
      <Image
        src={banner.image}
        alt={banner.tag}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="hero-main-container">
        <div className="absolute inset-0 flex items-center">
          <div className="px-12 md:px-12 text-left text-white space-y-4">
            <PageTitle
              tag={banner.tag}
              subHeading={banner.subHeading}
              tagClass="text-white"
              wrapperClass="max-w-3xl mx-auto text-left"
              subHeadingClass="text-white mt-4"
            />
            {banner.buttonLabel && (
              <button className="contact-us-btn">{banner.buttonLabel}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BannerPage({ bannerPageData }) {
  return (
    <div>
      {bannerPageData.map((banner) => (
        <Banner key={banner.id} banner={banner} />
      ))}
    </div>
  );
}
