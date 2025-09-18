"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Specialties", href: "/our-speclities" },
  { label: "Patient Services", href: "/patient-services" },
  { label: "Clinic Visit", href: "/clinic-visit" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Blogs& Health Library", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: "/icons/social.png",
    url: "https://facebook.com/yourpage",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "/icons/social.png",
    url: "https://twitter.com/yourhandle",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "/icons/social.png",
    url: "https://instagram.com/yourprofile",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: "/icons/social.png",
    url: "https://linkedin.com/in/yourprofile",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <div className="footer-parent-wrapper pt-16">
      <div className="hero-main-container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          <div>
            <Image
              src={"/images/flogo.png"}
              alt="logo"
              height={134}
              width={285}
              className="object-contain"
            />
            <p className="mt-6 footer-desc-title">
              Ckosmic Health delivers advanced and compassionate healthcare
              powered by innovation and expertise. Our mission is to inspire
              healthier lives worldwide.
            </p>
            <p className="mt-8 mb-3 footer-social-title">Follow us</p>
            <div className="flex gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border border-white p-4"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    className=""
                    height={20}
                    width={20}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex  items-start md:items-center lg:items-center flex-col">
            <ul>
              <p className="mt-8 mb-3 footer-title">Main pages</p>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-row gap-5 mb-3"
                >
                  <li className="footer-links mb-0"> {item.label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <p className="lg:mt-8 mb-3 footer-title ">
              Subscribe to our newsletter
            </p>
            <p className="mt-6 footer-desc-title">
              Lorem ipsum dolor sit amet consectetur odio vel nunc platea orci
              quis dolor ac aliquet in sit viverra et.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-col lg:flex-col md:items-start gap-4 lg:items-start mt-8"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  px-6 py-3 rounded-full border border-gray-300 focus:outline-none bg-white text-gray-600 "
                required
              />
              <button
                type="submit"
                className="subScribe-btn px-6 py-3 justify-center rounded-full border border-white  text-white font-medium flex md:items-start items-center gap-2  hover:cursor-pointer footer-desc-title"
              >
                Subscribe <span>→</span>
              </button>
            </form>
          </div>
        </div>
        <span className="flex justify-center md:justify-center lg:justify-end  py-5 text-white">
          Copyright ©Ckosmin Health City
        </span>
      </div>
    </div>
  );
}
