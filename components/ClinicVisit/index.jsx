import AppointmentForm from "../BookAppointment/AppointmentForm";

export default function AppointmentLayout() {
  return (
    <div>
      <div className="bg-color-wrapper py-10">
        <div className="hero-main-container  grid lg:grid-cols-2 lg:gap-30 ">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white primary-font">
              How to Book an Appointment
            </h2>
            <p className=" primary-font text-color-for-bg ">
              You can book an appointment online for a teleconsultation or walk
              into our hospital for in-person consultation. Select your doctor,
              date, and time slot below.
            </p>

            <ul className="list-inside space-y-2 primary-font text-color-for-bg">
              <li>✔ Online — Connect with doctors via video call</li>
              <li>✔ Walk-in — Visit our hospital front desk directly</li>
              <li>✔ Choose your preferred doctor & time slot</li>
            </ul>

            <div className="flex justify-start">
              <div className="inline-block bg-amber-100 p-4 rounded-xl text-color-for-bg font-medium primary-font">
                📞 Need help? Call us:{" "}
                <span className="font-bold">+91-98765-43210</span>
              </div>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
