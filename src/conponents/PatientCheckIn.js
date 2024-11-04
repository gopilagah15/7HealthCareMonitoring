// components/PatientCheckIn.js
import React, { useState } from 'react';

const PatientCheckIn = ({ onCheckIn }) => {
  const [name, setName] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = { name, medicalHistory, symptoms };
    onCheckIn(patient);
    setName('');
    setMedicalHistory('');
    setSymptoms('');
  };

  return (
    <div>
      <h2>Patient Check-in</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Medical History"
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
        <textarea
          placeholder="Current Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button type="submit">Check In</button>
      </form>
    </div>
  );
};

export default PatientCheckIn;
