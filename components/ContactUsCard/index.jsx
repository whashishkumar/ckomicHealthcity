"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import MapLocation from "../MapLocation";

const contactInfo = [
  {
    type: "Address",
    value: "CKOSMIC Health City, Ludhiana, Punjab",
    icon: FaMapMarkerAlt,
    link: "https://maps.google.com/?q=CKOSMIC Health City, Ludhiana, Punjab",
  },
  {
    type: "Email",
    value: "info@ckosmic.com",
    icon: FaEnvelope,
    link: "mailto:info@ckosmic.com",
  },
  {
    type: "Phone",
    value: "+91 98765 43210",
    icon: FaPhone,
    link: "tel:+919876543210",
  },
];

export default function ContactUsCard() {
  return (
    <div className="pt-14 bg-color-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hero-main-container ">
        {contactInfo.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center  gap-3 p-5  rounded shadow hover:shadow-lg  bg-white mb-8"
            >
              <Icon className="text-primary-color w-8 " />
              <p className="text-gray-600 text-center">{item.value}</p>
            </a>
          );
        })}
      </div>
      <MapLocation />
    </div>
  );
}
