// components/AppointmentAlerts.js
import React from 'react';

const AppointmentAlerts = ({ appointments }) => {
  const sendAlerts = () => {
    alert("Alerts sent to patients and doctors for upcoming appointments.");
  };

  return (
    <div>
      <h2>Appointment Alerts</h2>
      <button onClick={sendAlerts}>Send Alerts</button>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            Appointment for {appointment.patientName} with Dr. {appointment.doctorName} on {appointment.date}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentAlerts;
