import { useEffect, useState } from "react";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/appointments/doctor/${localStorage.getItem("userId")}`, {
      headers: { "Authorization": localStorage.getItem("token") }
    })
    .then(res => res.json())
    .then(setAppointments);
  }, []);

  return (
    <div className="container">
      <h2>Doctor Dashboard</h2>
      {appointments.map(a => (
        <div key={a._id} className="card">
          <p>Patient: {a.patientId.name}</p>
          <p>{a.date} - {a.time}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorDashboard;
