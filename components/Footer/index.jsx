"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useFooterList } from "../../context/FooterContext";
import Loader from "../../ui/Loader/Loader";

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
  const { footerItemsList, loading, fetchFooterListItems } = useFooterList();
  const { logo, site_description, copyright, social_icons } =
    footerItemsList?.data || {};
  const { main_menu } = footerItemsList;
  const { button, description, label, heading } =
    footerItemsList?.subscription || {};
  const footerBarItemList =
    (main_menu && main_menu.length > 0 && main_menu[0].items) || [];
  const mentTitle =
    (main_menu && main_menu.length > 0 && main_menu[0].name) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  useEffect(() => {
    fetchFooterListItems();
  }, []);

  if (loading) {
    return <Loader size={12} />;
  }

  return (
    <div className="footer-parent-wrapper pt-16">
      <div className="hero-main-container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          <div>
            {logo && (
              <Image
                src={logo}
                alt="logo"
                height={134}
                width={285}
                className="object-contain"
              />
            )}

            <p className="mt-6 footer-desc-title">{site_description}</p>
            <p className="mt-8 mb-3 footer-social-title">Follow us</p>
            <div className="flex gap-5">
              {social_icons?.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white p-3 rounded-full h-[50px] w-[50px] flex justify-center"
                >
                  <Image
                    src={link.image}
                    alt={link.name}
                    className="object-contain"
                    height={20}
                    width={20}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex  items-start md:items-center lg:items-center flex-col">
            <ul>
              <p className="mt-8 mb-3 footer-title">{mentTitle}</p>
              {footerBarItemList?.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="flex flex-row gap-5 mb-3"
                >
                  <li className="footer-links mb-0"> {item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <p className="lg:mt-8 mb-3 footer-title ">{heading}</p>
            <p className="mt-6 footer-desc-title">{description}</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-col lg:flex-col md:items-start gap-4 lg:items-start mt-8"
            >
              <input
                type="email"
                placeholder={label}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:h-[50px] px-6 py-3 rounded-full  font-medium  border border-gray-300 focus:outline-none bg-white text-gray-600 "
                required
              />
              <button
                type="submit"
                className="leading-none subScribe-btn lg:h-[50px] px-6 py-3 justify-center rounded-full border border-white  text-white font-medium flex  items-center gap-2  hover:cursor-pointer footer-desc-title"
              >
                {button} <span>→</span>
              </button>
            </form>
          </div>
        </div>
        <span className="leading-none flex justify-center md:justify-center lg:justify-end  py-5 text-white">
          {copyright}
        </span>
      </div>
    </div>
  );
}
