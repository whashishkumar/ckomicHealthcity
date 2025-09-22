import React from "react";
import "./style.css";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ToolTip({ contact }) {
  const { email, phone } = contact || {};
  return (
    <div className={`sub-container`}>
      <div
        className={`toolTip flex justify-between px-3 text-white items-center  `}
      >
        <p className="flex gap-4 secondary-font">
          <span className="text-sm flex items-center gap-2">
            <HiOutlineMail />
            <a href={`mailto:${email}`}>{email}</a>
          </span>
          <span className="text-sm flex items-center gap-2">
            <FaPhone />
            <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </p>
        <p className="flex gap-4 capitalize secondary-font">
          <span className="text-sm ">english</span>
          <span className="text-sm ">punjabi</span>
        </p>
      </div>
    </div>
  );
}
