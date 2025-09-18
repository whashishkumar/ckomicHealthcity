"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { IoMdClose } from "react-icons/io";
import ToolTip from "../ToolTip";
import { useMenuList } from "../../context/HeaderContext";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { menuItemsList } = useMenuList();

  return (
    <>
      <div className={`${styles.headerParentWrapper}`}>
        <div className="tip">
          <ToolTip />
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
