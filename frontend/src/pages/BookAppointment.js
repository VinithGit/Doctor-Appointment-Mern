import { useState } from "react";

function BookAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const book = async () => {
    await fetch("http://localhost:5000/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({
        patientId: localStorage.getItem("userId"),
        doctorId: prompt("Enter Doctor ID"),
        date,
        time
      })
    });
    alert("Appointment Booked");
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>
      <input type="date" onChange={e => setDate(e.target.value)} />
      <input placeholder="Time" onChange={e => setTime(e.target.value)} />
      <button onClick={book}>Book</button>
    </div>
  );
}

export default BookAppointment;
