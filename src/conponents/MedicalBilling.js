// components/MedicalBilling.js
import React, { useState } from 'react';

const MedicalBilling = ({ patients, onBill }) => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [amount, setAmount] = useState('');

  const handleBilling = () => {
    const bill = { patientName: selectedPatient, amount };
    onBill(bill);
    setSelectedPatient('');
    setAmount('');
  };

  return (
    <div>
      <h2>Medical Billing</h2>
      <select
        value={selectedPatient}
        onChange={(e) => setSelectedPatient(e.target.value)}
      >
        <option value="">Select Patient</option>
        {patients.map((patient, index) => (
          <option key={index} value={patient.name}>
            {patient.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBilling}>Generate Bill</button>
      <div> 
    <h3>{selectedPatient.name}</h3> 
      </div>
    </div>
  );
};

export default MedicalBilling;
