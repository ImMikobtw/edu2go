import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница включает Header и Slider */}
        <Route path="/" element={
          <>
            <Header />
            <Slider />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

