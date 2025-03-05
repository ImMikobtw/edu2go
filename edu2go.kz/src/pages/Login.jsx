import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="loginButton">Sign In</button>
        </form>
        <p>
          Don't have an account? <span onClick={() => navigate("/register")} className="registerLink">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
