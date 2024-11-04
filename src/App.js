// App.js
import React, { useState } from 'react';
import PatientCheckIn from './conponents/PatientCheckIn';
import AppointmentAlerts from './conponents/AppointmentAlerts';
import MedicalBilling from './conponents/MedicalBilling';
import HealthStatisticsReport from './conponents/HealthStatisticsReport';
 

const App = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [bills, setBills] = useState([]);

  const handleCheckIn = (patient) => {
    setPatients([...patients, patient]);
  };

  const handleNewAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const handleNewBill = (bill) => {
    setBills([...bills, bill]);
  };

  return (
    <div>
      <h1>Healthcare Monitoring System</h1>
      <PatientCheckIn onCheckIn={handleCheckIn} />
      <AppointmentAlerts appointments={appointments} />
      <MedicalBilling patients={patients} onBill={handleNewBill} />
      <HealthStatisticsReport patients={patients} />
    </div>
  );
};

export default App;
