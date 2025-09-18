import React from "react";
import PageTitle from "../../ui/PageTitle";

export default function TestimonyGallery() {
  const videos = [
    {
      id: 1,
      title: "Patient Testimony 1",
      url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    },
    {
      id: 2,
      title: "Patient Testimony 2",
      url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    },
    {
      id: 3,
      title: "Patient Testimony 3",
      url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    },
    {
      id: 4,
      title: "Patient Testimony 4",
      url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    },
    {
      id: 5,
      title: "Patient Testimony 5",
      url: "https://www.youtube.com/embed/BOI5oxGhJ7E",
    },
  ];

  return (
    <div className="gallery-wrapper">
      <div className="hero-main-container">
        <div className="py-14">
          <PageTitle
            tag={"Testimony Gallery"}
            tagClass="tag-style m-auto w-[250px]"
            heading="Best Weight Loss Hospital in Punjab"
            headingClass="text-xl font-bold mt-4"
            wrapperClass="text-center m-auto w-full"
          />

          {/* First row: 2 videos */}
          <div className="grid lg:grid-cols-2 gap-20 pt-10">
            {videos.slice(0, 2).map((video) => (
              <div
                key={video.id}
                className="video-container"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          {/* Second row: 3 videos */}
          <div className="grid lg:grid-cols-3 gap-20 pt-10">
            {videos.slice(2).map((video) => (
              <div
                key={video.id}
                className="video-container"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
