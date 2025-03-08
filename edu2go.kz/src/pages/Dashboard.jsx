import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login"); 
    }
  }, [token, navigate]);

  return (
    <div className="dashboardContainer">
      <h2>Welcome to your Dashboard</h2>
      <p>This is a protected page that only logged-in users can access.</p>
      <button onClick={() => { 
        localStorage.removeItem("token");
        navigate("/login");
      }}>Logout</button>
    </div>
  );
}