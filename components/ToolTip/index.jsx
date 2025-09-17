import React from "react";
import "./style.css";

export default function ToolTip() {
  return (
    <div>
      <div className={`sub-container`}>
        <div
          className={`toolTip flex justify-between px-3 text-white items-center  `}
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
    </div>
  );
}
