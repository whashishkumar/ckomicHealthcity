"use client";
import { useState } from "react";
import PageTitle from "../../ui/PageTitle";

export const videos = [
  {
    id: 1,
    title: "Mini Gastric Bypass Surgery for Weight Loss | Dr. Amit Sood",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 2,
    title: "Weight Loss Surgery | Bariatric Surgeon in Punjab",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 3,
    title: "Weight Loss Surgery | Best Bariatric Surgeon in Punjab",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 4,
    title: "Weight Loss Surgery | Rajasthan Testimonial",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 5,
    title: "Mini Gastric Bypass Surgery for Weight Loss | Dr. Amit Sood",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 6,
    title: "Weight Loss Surgery | Bariatric Surgeon in Punjab",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 7,
    title: "Weight Loss Surgery | Best Bariatric Surgeon in Punjab",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
  {
    id: 8,
    title: "Weight Loss Surgery | Rajasthan Testimonial",
    url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    thumbnail: "/images/doctor.png",
  },
];

export default function Testimonial() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="testimonial-wrapper bg-color-wrapper ">
      <div className="hero-main-container">
        <div className="py-14">
          <PageTitle
            tag={"Testimonials"}
            tagClass="text-white font-bold"
            wrapperClass="m-auto"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 ">
            {/* Main Video */}
            <div className="col-span-2">
              <h2 className="font-bold mb-5 text-2xl text-white">
                {activeVideo.title}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Playlist */}
            <div className="flex flex-col gap-4 max-h-[300px] sm:max-h-[400px] md:max-h-[530px] overflow-y-auto pr-2 sm:pr-3 scrollbar-thin">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`flex gap-3 p-3 border rounded-lg text-left transition cursor-pointer ${
                    activeVideo.id === video.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-20 h-14 sm:w-24 sm:h-16 object-cover rounded"
                  />
                  <p className="text-sm font-medium text-gray-700 line-clamp-3">
                    {video.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
