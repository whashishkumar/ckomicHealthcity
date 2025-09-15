"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { IoMdClose } from "react-icons/io";

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
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`${styles.headerParentWrapper}`}>
        <div className={`sub-container`}>
          <div
            className={`${styles.toolTip} flex justify-between px-3 text-white items-center  `}
          >
            <p className="flex gap-4 secondary-font">
              <span className="text-sm">info@ckosmichealth.com</span>
              <span className="text-sm ">+91-98765-43210</span>
            </p>
            <p className="flex gap-4 capitalize secondary-font">
              <span className="text-sm ">english</span>
              <span className="text-sm ">punjabi</span>
            </p>
          </div>
        </div>

        <header className={`${styles.header} container`}>
          <div className={`sub-container ${styles.headerContainer}  `}>
            <div className={styles.logo}>
              <img
                src="/images/logo.svg"
                alt="Logo"
                className={styles.logoImg}
              />
            </div>

            <nav className={`${styles.nav} ${styles.desktopNav}`}>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/appointment"
              className={`${styles.ctaBtn} ${styles.desktopNav}`}
            >
              Book Appointment
            </Link>

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
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/appointment"
                  className={`${styles.ctaBtn} block text-center mt-4`}
                  onClick={() => setMenuOpen(false)}
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
