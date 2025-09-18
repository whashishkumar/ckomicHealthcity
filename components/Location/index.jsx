import React from "react";
import HealthCityAddress from "../HealthCityAddress";

export default function Location() {
  return (
    <div className="location-wrapper bg-white">
      <div className="hero-main-container ">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 py-14">
          <HealthCityAddress />
          <div className="relative w-fullflex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6852.465198951177!2d75.15863!3d30.824148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a0958b7b666ab%3A0xfe2712cf9c786863!2sDr.%20Amit%20Sood!5e0!3m2!1sen!2sin!4v1758176470487!5m2!1sen!2sin"
              className="border-0 w-full lg:max-w-[600px] h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
