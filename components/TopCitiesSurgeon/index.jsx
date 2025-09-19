import Link from "next/link";
import React from "react";

export const surgeons = [
  {
    type: "Bariatric Surgeon",
    cities: [
      { name: "Punjab", url: "/bariatric-surgeon/punjab" },
      { name: "Moga", url: "/bariatric-surgeon/moga" },
      { name: "Jalandhar", url: "/bariatric-surgeon/jalandhar" },
      { name: "Chandigarh", url: "/bariatric-surgeon/chandigarh" },
      { name: "Bathinda", url: "/bariatric-surgeon/bathinda" },
      { name: "Amritsar", url: "/bariatric-surgeon/amritsar" },
      { name: "Ferozepur", url: "/bariatric-surgeon/ferozepur" },
      { name: "Faridkot", url: "/bariatric-surgeon/faridkot" },
      { name: "Jammu", url: "/bariatric-surgeon/jammu" },
    ],
  },
  {
    type: "Weight Loss Surgeon",
    cities: [
      { name: "Ambala", url: "/weight-loss-surgeon/ambala" },
      { name: "Patiala", url: "/weight-loss-surgeon/patiala" },
      { name: "Punjab", url: "/weight-loss-surgeon/punjab" },
      { name: "Moga", url: "/weight-loss-surgeon/moga" },
      { name: "Ludhiana", url: "/weight-loss-surgeon/ludhiana" },
      { name: "Jalandhar", url: "/weight-loss-surgeon/jalandhar" },
      { name: "Chandigarh", url: "/weight-loss-surgeon/chandigarh" },
      { name: "Bathinda", url: "/weight-loss-surgeon/bathinda" },
      { name: "Amritsar", url: "/weight-loss-surgeon/amritsar" },
      { name: "Ferozepur", url: "/weight-loss-surgeon/ferozepur" },
      { name: "Jammu", url: "/weight-loss-surgeon/jammu" },
    ],
  },
];

export default function TopCitiesSurgeon() {
  return (
    <div className="topCitiesSurgeonWrapper bg-white">
      <div className="hero-main-container">
        <div className="py-12">
          {surgeons.map((surgeon, idx) => (
            <div key={idx} className="lg:mb-8">
              <h2 className="text-xl font-medium primary-font text-secondary-color">
                <span className="font-semibold text-primary-color">
                  {surgeon.type}{" "}
                </span>{" "}
                in Top Cities
              </h2>
              <div className="flex flex-wrap py-2 text-color-for-bg">
                {surgeon.cities.map((city, cityIdx) => (
                  <Link key={cityIdx} href={city.url}>
                    <p className="text-color-for-bg mr-2">
                      {`Best ${surgeon.type.toLowerCase()} in `}
                      <span className="font-semibold">{city.name}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
