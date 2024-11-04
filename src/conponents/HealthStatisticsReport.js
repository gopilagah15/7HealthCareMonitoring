// components/HealthStatisticsReport.js
import React from 'react';

const HealthStatisticsReport = ({ patients }) => {
  const totalPatients = patients.length;
  const uniqueSymptoms = [
    ...new Set(patients.map((patient) => patient.symptoms).flat()),
  ];

  return (
    <div>
      <h2>Health Statistics Report</h2>
      <p>Total Patients: {totalPatients}</p>
      <p>Unique Symptoms Reported: {uniqueSymptoms.join(', ')}</p>
    </div>
  );
};

export default HealthStatisticsReport;
