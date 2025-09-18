import React from "react";
import HealthCityAddress from "../HealthCityAddress";
import MapLocation from "../MapLocation";

export default function Location() {
  return (
    <div className="location-wrapper bg-white">
      <div className="hero-main-container ">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 py-14">
          <HealthCityAddress />
          <div className="relative w-full flex items-center justify-center">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
  );
}
