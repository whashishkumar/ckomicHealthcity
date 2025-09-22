"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { IoMdClose } from "react-icons/io";
import ToolTip from "../ToolTip";
import { useMenuList } from "../../context/HeaderContext";
import Image from "next/image";
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

export default function Navbar() {
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
          <div className={`sub-container ${styles.headerContainer}  `}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <nav className={`${styles.nav} ${styles.desktopNav}`}>
              {navBarItemList?.map((item) => (
                <Link key={item.url} href={item.url} className={styles.navLink}>
                  {item.title}
                </Link>
              ))}
            </nav>

            <Link
              href="/appointment"
              className={`${styles.ctaBtn} ${styles.desktopNav}`}
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
                {navBarItemList?.map((item) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
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
