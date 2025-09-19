import React from "react";
import AppointmentLayout from "../../components/ClinicVisit";
import Reviews from "../../components/Reviews";
import Location from "../../components/Location";
import CallUs from "../../components/CallUs";
import TopCitiesSurgeon from "../../components/TopCitiesSurgeon";
import VisitBanner from "../../components/ClinicVisit/VisitBanner";
import BenifitsOnlineAppointment from "../../components/OnlineAppointmentBenifits.jsx";

export default function ClinicVisit() {
  return (
    <>
      <div>
        <VisitBanner />
        <BenifitsOnlineAppointment />
        <AppointmentLayout />
        <Location />
        <CallUs />
        <Reviews />
        <TopCitiesSurgeon />
      </div>
    </>
  );
}
