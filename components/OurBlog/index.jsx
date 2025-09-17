import React from "react";
import "./style.css";
import PageTitle from "../../ui/PageTitle";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    badge: "Patient Care",
    title:
      "Exploring the latest advances in medical technology and patient care",
    description:
      "Our website serves as a comprehensive resource dedicated to your health and well-being. Designed with you in mind, it offers easy access to information about our medical services,",
    image: "/images/care.jpg",
    link: "#",
  },
  {
    id: 2,
    badge: "Research & Innovation",
    title: "Empowering patients through quality healthcare",
    description:
      "Our website serves as a comprehensive resource dedicated to your health and well-being. Designed with you in mind, it offers easy access to information about our medical services We are committed to driving medical breakthroughs and pioneering innovative solutions that improve lives. Explore our research and innovation programs.",
    image: "/images/care.jpg",
    link: "#",
  },
];

const cardDataTwo = [
  {
    id: 1,
    badge: "Patient Care",
    title:
      "Exploring the latest advances in medical technology and patient care",
    description:
      "Our website serves as a comprehensive resource dedicated to your health and well-being. Designed with you in mind, it offers easy access to information about our medical services,",

    image: "/images/lightNote.png",

    link: "#",
  },
  {
    id: 2,
    badge: "Research & Innovation",
    title: "Empowering patients through quality healthcare",
    description:
      "We are committed to driving medical breakthroughs and pioneering innovative solutions that improve lives. Explore our research and innovation programs.",
    image: "/images/lightNote.png",
    link: "#",
  },
];

export default function OurBlog() {
  return (
    <div className="our-blog-wrapper">
      <div className="hero-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] md:grid-cols-1 py-16 gap-10">
          <div>
            <PageTitle
              tag={"Our Blogs"}
              heading="Latest Post from our Blog"
              headingClass="text-4xl font-bold mt-4 blog-title-banner"
              wrapperClass="max-w-3xl  text-left"
              subHeading={`Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate are focus thing for us patient proprity`}
              subHeadingClass="my-6 text-[28px] leading-[1.75rem]"
            />
            <div className="grid grid-cols-1 gap-20">
              {cardData.map((card, idx) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row box-sh"
                >
                  <div className="relative md:w-1/2 flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.badge}
                      width={322}
                      height={217}
                      className="w-full h-auto object-contain"
                    />
                    <span
                      className={`absolute text-white text-sm px-3 py-1 rounded-full badge-text
                     ${idx % 2 === 0 ? "top-3 left-3" : "bottom-3 left-3"}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div
                    className={`p-6 flex flex-col justify-between flex-1 primary-font ${
                      idx % 2 === 0 ? "blog-right-bg-even" : "blog-right-bg-odd"
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="blog-card-title mb-4">{card.title}</h3>
                      <p className="leading-relaxed">{card.description}</p>
                    </div>

                    <a
                      href={card.link}
                      className="font-medium hover:underline flex items-center gap-2"
                    >
                      Read more <span className="text-xl">»</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {cardDataTwo.map((card, idx) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full box-sh"
              >
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.badge}
                    width={629}
                    height={303}
                    className="w-full object-contain"
                  />
                  <span className="absolute text-white text-sm px-3 py-1 rounded-full badge-text top-3 left-3">
                    {card.badge}
                  </span>
                </div>

                <div
                  className={`p-8 flex flex-col flex-1 primary-font ${
                    idx % 2 !== 0 ? "blog-right-bg-even" : "blog-right-bg-odd"
                  }`}
                >
                  <h3 className="blog-card-title mb-4">{card.title}</h3>
                  <p className="leading-relaxed mb-6 primary-font flex-1">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="font-medium hover:underline flex items-center justify-end gap-2 primary-font"
                  >
                    Read more <span className="text-xl">»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
