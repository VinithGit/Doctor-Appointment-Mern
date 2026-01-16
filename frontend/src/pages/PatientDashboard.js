import { useEffect, useState } from "react";
import { getDoctors } from "../services/api";

function PatientDashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return (
    <div className="container">
      <h2>Patient Dashboard</h2>
      {doctors.map(d => (
        <div key={d._id} className="card">
          <p>{d.name}</p>
          <p>{d.specialization}</p>
          <button onClick={() => window.location="/book"}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default PatientDashboard;
