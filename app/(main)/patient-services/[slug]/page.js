import React from "react";
import PatientServicesDetails from "../../../../components/PatientServicesDetails";

export default function PatientServices({ params }) {
  const { slug } = params;

  return (
    <div>
      <PatientServicesDetails slug={slug} />
    </div>
  );
}
