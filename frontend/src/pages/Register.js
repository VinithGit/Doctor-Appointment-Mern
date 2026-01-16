import { useState } from "react";
import { registerUser } from "../services/api";

function Register() {
  const [form, setForm] = useState({});

  const register = async () => {
    await registerUser(form);
    alert("Registered Successfully");
    window.location = "/";
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />
      <select onChange={e => setForm({...form, role:e.target.value})}>
        <option>Select Role</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <input placeholder="Specialization (Doctor only)" onChange={e => setForm({...form, specialization:e.target.value})} />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
