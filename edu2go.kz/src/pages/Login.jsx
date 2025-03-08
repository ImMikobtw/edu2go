import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("#", {
        email,
        password
      });

      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error.response?.data?.message || "Sorry, something went wrong");
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h2>Login</h2>
        {error && <p className="errorMessage">{error}</p>} {}
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
