"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { IoMdClose } from "react-icons/io";
import ToolTip from "../ToolTip";
import { useMenuList } from "../../context/HeaderContext";
import Image from "next/image";
import Loader from "../../ui/Loader/Loader";
import { usePathname } from "next/navigation";

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

const ourSpeclities = [
  {
    title: "Cardiology",
    url: "/our-specialities/cardiology",
  },
  {
    title: "Pediatrics",
    url: "/our-specialities/pediatrics",
  },
  {
    title: "Orthopedics",
    url: "/our-specialities/orthopedics",
  },
  {
    title: "Neurology",
    url: "/our-specialities/neurology",
  },
  {
    title: "Gynecology",
    url: "/our-specialities/gynecology",
  },
  {
    title: "Ophthalmology",
    url: "/our-specialities/ophthalmology",
  },
];

const patientServices = [
  {
    title: "Laboratory Services",
    url: "/patient-services/laboratory-services",
  },
  {
    title: "Radiology & Imaging",
    url: "/patient-services/radiology",
  },
  {
    title: "Pharmacy Services",
    url: "/patient-services/pharmacy-services",
  },
  {
    title: "Emergency Care",
    url: "/patient-services/emergency-care",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { menuItemsList, fetchMenuListItems, loading } = useMenuList();
  const [showTip, setShowTip] = useState(true);
  const { book_appointment, contact, logo, menus } = menuItemsList || {};
  const navBarItemList = (menus && menus.length > 0 && menus[0].items) || [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowTip(true); // show again at top
      } else {
        setShowTip(false); // hide when scrolled
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchMenuListItems();
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const aptIcon = `${baseUrl}${book_appointment?.icon}`;

  const handleMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  if (loading || !menuItemsList) {
    return <Loader size={12} />;
  }

  return (
    <>
      <div className={`${styles.headerParentWrapper}`}>
        {showTip && (
          <div className={`${styles.tip}`}>
            <ToolTip contact={contact} />
          </div>
        )}
        <header className={`${styles.header} container`}>
          <div className={`sub-container ${styles.headerContainer}`}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <nav className={`${styles.nav} ${styles.desktopNav}`}>
              {navBarItemList?.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <div key={item.url} className={styles.navItem}>
                    {["Our Specialities", "Patient Services"].includes(
                      item.title
                    ) ? (
                      <span
                        className={`${styles.navLink} ${
                          isActive ? styles.activeNavLink : ""
                        } cursor-default`}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <Link
                        href={item.url}
                        className={`${styles.navLink} ${
                          isActive ? styles.activeNavLink : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}

                    {item.title === "Our Specialities" && (
                      <div className={styles.dropdownMenu}>
                        {ourSpeclities?.map((subItem) => {
                          const subActive = pathname === subItem.url;
                          return (
                            <Link
                              key={subItem.url}
                              href={subItem.url}
                              className={`${styles.dropdownLink}  ${
                                subActive ? styles.activeNavLink : ""
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Dropdown - Patient Services */}
                    {item.title === "Patient Services" && (
                      <div className={styles.dropdownMenu}>
                        {patientServices?.map((subItem) => {
                          const subActive = pathname === subItem.url;
                          return (
                            <Link
                              key={subItem.url}
                              href={subItem.url}
                              className={`${styles.dropdownLink} ${
                                subActive ? styles.activeNavLink : ""
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Book Appointment CTA */}
            <Link
              href="/appointment"
              className={`${styles.ctaBtn} ${styles.desktopNav} ${
                pathname === "/appointment" ? styles.activeNavLink : ""
              }`}
            >
              {book_appointment && (
                <Image
                  src={book_appointment?.icon}
                  alt={book_appointment?.heading}
                  height={18}
                  width={18}
                  className="mr-2 object-contain"
                />
              )}
              {book_appointment?.heading}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {!menuOpen ? (
                <>
                  <span
                    className={menuOpen ? styles.barOpen : styles.bar}
                  ></span>
                  <span
                    className={menuOpen ? styles.barOpen : styles.bar}
                  ></span>
                  <span
                    className={menuOpen ? styles.barOpen : styles.bar}
                  ></span>
                </>
              ) : (
                <IoMdClose className={styles.closeIcon} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={styles.mobileMenu}>
              <nav className={styles.mobileNav}>
                {navBarItemList?.map((item) => {
                  const isActive = pathname === item.url;
                  const hasDropdown = [
                    "Our Specialities",
                    "Patient Services",
                  ].includes(item.title);
                  return (
                    <div key={item.url}>
                      {hasDropdown ? (
                        <span
                          className={`${styles.mobileNavLink} ${
                            isActive ? styles.activeNavLink : ""
                          } cursor-pointer`}
                          onClick={() => {
                            if (item.title === "Our Specialities") {
                              setOpenDropdown((prev) =>
                                prev === "specialities" ? "" : "specialities"
                              );
                            } else if (item.title === "Patient Services") {
                              setOpenDropdown((prev) =>
                                prev === "services" ? "" : "services"
                              );
                            }
                          }}
                        >
                          {item.title}
                        </span>
                      ) : (
                        <Link
                          href={item.url}
                          className={`${styles.mobileNavLink} ${
                            isActive ? styles.activeNavLink : ""
                          }`}
                          onClick={handleMobileMenu}
                        >
                          {item.title}
                        </Link>
                      )}

                      {/* Mobile Dropdown */}
                      {item.title === "Our Specialities" &&
                        openDropdown === "specialities" && (
                          <div className={styles.mobileDropdown}>
                            {ourSpeclities.map((subItem) => {
                              const subActive = pathname === subItem.url;
                              return (
                                <Link
                                  key={subItem.url}
                                  href={subItem.url}
                                  className={`${styles.dropdownLink} ${
                                    subActive ? styles.activeNavLink : ""
                                  }`}
                                  onClick={handleMobileMenu}
                                >
                                  {subItem.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}

                      {item.title === "Patient Services" &&
                        openDropdown === "services" && (
                          <div className={styles.mobileDropdown}>
                            {patientServices.map((subItem) => {
                              const subActive = pathname === subItem.url;
                              return (
                                <Link
                                  key={subItem.url}
                                  href={subItem.url}
                                  className={`${styles.dropdownLink} ${
                                    subActive ? styles.activeNavLink : ""
                                  }`}
                                  onClick={handleMobileMenu}
                                >
                                  {subItem.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                    </div>
                  );
                })}

                {/* Mobile Book Appointment */}
                <Link
                  href="/appointment"
                  className={`${styles.ctaBtn} block text-center mt-4 ${
                    pathname === "/appointment" ? styles.activeNavLink : ""
                  }`}
                  onClick={handleMobileMenu}
                >
                  Book Appointment
                </Link>
              </nav>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
