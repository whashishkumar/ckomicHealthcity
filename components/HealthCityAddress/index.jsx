import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const contactInfo = [
  {
    id: 1,
    label: "About",
    value:
      "Ckosmic Health City, Moga is the base center of Dr. Amit Sood where all types of bariatric/weight loss surgeries are performed. The center is equipped with ultra modern high definition operation theatre and world class rooms. At Ckosmic Health City Moga other than Bariatric/weight loss surgery, Laparoscopic surgery for different types of hernias, fibroids, gallbladder, kidney removal etc. are also performed.",
  },
  {
    id: 2,
    label: "Address",
    value: "Ckosmic Health City, G.T. Road, MOGA 142001",
  },
  {
    id: 3,
    label: "Email",
    value: "ckosmichelpdesk@gmail.com",
    type: "email",
  },
  {
    id: 4,
    label: "Phone",
    value: ["+91 73411-01891", "+91 73411-01892"],
    type: "phone",
  },
  {
    id: 5,
    label: "Social",
    type: "social",
    value: [
      {
        platform: "Twitter",
        handle: "DrAmitSood",
        link: "https://twitter.com/DrAmitSood",
        icon: FaTwitter,
      },
      {
        platform: "Instagram",
        handle: "ckosmic.dramitsood",
        link: "https://instagram.com/ckosmic.dramitsood",
        icon: FaInstagram,
      },
      {
        platform: "Facebook",
        handle: "Ckosmic Surgical Centre",
        link: "https://facebook.com/CkosmicSurgicalCentre",
        icon: FaFacebook,
      },
    ],
  },
];

export default function HealthCityAddress() {
  return (
    <div className="">
      {contactInfo.map((item) => (
        <div key={item.id}>
          <h3 className="font-medium text-xl secondary-font my-2 text-secondary-color ">
            {item.label}
          </h3>
          {item.type === "phone" ? (
            <ul className="space-y-1 font-normal primary-font text-color-for-bg">
              {item.value.map((phone, idx) => (
                <li key={idx}>
                  <a
                    href={`tel:${phone}`}
                    className="font-normal primary-font text-color-for-bg "
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          ) : item.type === "email" ? (
            <a
              href={`mailto:${item.value}`}
              className="font-normal primary-font text-color-for-bg "
            >
              {item.value}
            </a>
          ) : item.type === "social" ? (
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {item.type === "social" &&
                item.value.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <li key={idx} className="flex">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 font-normal primary-font text-color-for-bg items-center"
                      >
                        <Icon className="text-lg" />
                        {social.handle}
                      </a>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <p className="text-gray-600">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}
