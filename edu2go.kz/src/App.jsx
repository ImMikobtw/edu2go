import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ReviewsSlider } from "./components/ReviewsSlider";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Slider />
            <ReviewsSlider />
            {/* <SearchFilter /> Временно отключил, потому что бэк не готов, а без этого ошибки будут*/} 
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

