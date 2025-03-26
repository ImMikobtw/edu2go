import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/auth" />;
}