import React from "react";
import PageTitle from "../../ui/PageTitle";
import Image from "next/image";
import FAQ from "../FAQ";

const education = [
  {
    degree: "M.B.B.S",
    institute: "Jawahar Lal Nehru Medical College",
    location: "Belgaum",
  },
  {
    degree: "Master of Surgery (MS)",
    institute: "Sri Ramachandra University",
    location: "Chennai",
  },
  {
    degree: "DNB",
    institute: "National Board of Examinations",
    location: "New Delhi",
  },
  {
    degree: "F-GI & HPB Surgery",
    institute: "Amrita Institute of Medical Sciences & Research Center",
    location: "Kochi",
  },
  {
    degree: "Minimal Access, Bariatric and Metabolic Surgery",
    institute: "CODS",
    location: "Mumbai",
  },
  {
    degree: "Minimally Invasive Surgery",
    institute: "MUHS",
    location: "Nashik",
  },
  {
    degree: "Honor Code Certificate (Metabolic Applied Research Strategy-MARS)",
    institute: "USA",
    location: null,
  },
];

export default function AboutSurgeon() {
  return (
    <div className="about-surgeon-wrapper bg-white">
      <div className="hero-main-container">
        <div className="py-14">
          <PageTitle
            heading={"About The Surgeon"}
            headingClass="m-auto text-center"
          />
          <div className="grid lg:grid-cols-2 py-14 gap-10">
            <Image
              src={"/images/surgenamit.webp"}
              alt="surgen"
              height={400}
              width={550}
              className="w-full lg:max-w-[550px] h-auto object-cover "
            />
            <div className="">
              <p className="font-bold my-5">Dr. Amit Sood</p>
              <p className="font-normal primary-font text-color-for-bg mt-6 ">
                MBBS , MS , DNB , F GI & HPB , MAS , MARS
              </p>
              <p className="font-normal primary-font text-color-for-bg  mt-6">
                Minimal Access , Bariatric , Metabolic and Endoscopic Surgeon
              </p>
              <p className="font-normal primary-font text-color-for-bg  mt-6">
                Dr. Amit Sood, who is the Founder & Director of CKOSMIC HEALTH
                CITY and his experience forms the core of the organization. He
                is one of the youngest Minimal Access, Bariatric, Metabolic,
                Laparoscopic and Endoscopic Surgeon in India and has also been
                awarded with a Gold Medal in surgery.
              </p>
              <ul className="space-y-4 mt-6">
                {education.map((item, index) => (
                  <li
                    key={index}
                    className="font-normal primary-font text-color-for-bg list-disc ml-4 "
                  >
                    <span className="">{item.degree}</span>
                    <span className="mx-2">{item.institute}</span>
                    {item.location && <>{item.location}</>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
