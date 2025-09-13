"use client";
import Link from "next/link";
import styles from "./style.module.css";

export default function Navbar() {
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

  return (
    <>
      <div className={`sub-container`}>
        <div
          className={`${styles.toolTip} flex justify-between px-3 text-white text-center`}
        >
          <p className="flex gap-4 ">
            <span className="text-sm font-normal">info@ckosmichealth.com</span>
            <span className="text-sm font-normal">+91-98765-43210</span>
          </p>
          <p className="flex gap-4 capitalize">
            <span className="text-sm font-normal">english</span>
            <span className="text-sm font-normal">punjabi</span>
          </p>
        </div>
      </div>
      <header className={`${styles.header} container`}>
        <div className={`sub-container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <img src="/images/logo.svg" alt="Logo" className={styles.logoImg} />
          </div>
          <nav className={styles.nav}>
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/appointment" className={styles.ctaBtn}>
            Book Appointment
          </Link>
        </div>
      </header>
    </>
  );
}
