import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering with:", email, password);
    // Здесь можно добавить логику регистрации
  };

  return (
    <div className="registerContainer">
      <div className="registerBox">
        <h2>Sign Up</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="registerButton">Sign Up</button>
        </form>
        <p>
          Already have an account? <span onClick={() => navigate("/login")} className="loginLink">Sign In</span>
        </p>
      </div>
    </div>
  );
}
