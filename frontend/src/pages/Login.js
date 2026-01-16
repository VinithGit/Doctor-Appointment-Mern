import { useState } from "react";
import { loginUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await loginUser({ email, password });

    localStorage.setItem("token", res.token);
    localStorage.setItem("userId", res.userId);
    localStorage.setItem("role", res.role);

    if (res.role === "patient") window.location = "/patient";
    if (res.role === "doctor") window.location = "/doctor";
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p onClick={() => window.location="/register"}>New user? Register</p>
    </div>
  );
}

export default Login;
