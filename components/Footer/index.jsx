import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Specialties", href: "/specialties" },
  { label: "Patient Services", href: "/services" },
  { label: "Clinic Visit", href: "/clinic-visit" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Blogs & Health Library", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
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
  return (
    <div className="footer-parent-wrapper py-16">
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
          <div className="flex  items-center md:items-center lg:items-center flex-col">
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
            <p className="mt-8 mb-3 footer-title">
              Subscribe to our newsletter
            </p>
            <p className="mt-6 footer-desc-title">
              Lorem ipsum dolor sit amet consectetur odio vel nunc platea orci
              quis dolor ac aliquet in sit viverra et.
            </p>
            {/* <button>Subscribe</button> */}
          </div>
        </div>
        <span className="flex justify-center md:justify-center lg:justify-end  text-white">
          Copyright ©Ckosmin Health City
        </span>
      </div>
    </div>
  );
}
