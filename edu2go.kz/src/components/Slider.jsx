import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Slider.css";
import graduateGirl from "../assets/landing-slider/girl-graduate.jpg";
import hands from "../assets/landing-slider/hands.jpg";

const slides = [
    {
        image: graduateGirl,
        title: "Join the Future of Education",
        button1: "Learn More",
        button2: "Sign Up",
        link1: "/learn-more",
        link2: "/register"
    },
    {
        image: hands,
        title: "Discover New Opportunities",
        button1: "Explore",
        button2: "Get Started",
        link1: "/explore",
        link2: "/get-started"
    },
];

export function Slider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className = "overlay"></div>
          <img src={slides[index].image} alt={`Slide ${index + 1}`} />
          <div className="slideContent">
            <h2>{slides[index].title}</h2>
            <div className="buttons">
              <button className="btn btnPrimary">
                {slides[index].button1}
              </button>
              <button className="btn btnSecondary" onClick={() => navigate(slides[index].link2)}>
                {slides[index].button2}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="sliderDots">
        {slides.map((_, i) => (
          <span key={i} className={i === index ? "dot active" : "dot"}>●</span>
        ))}
      </div>
    </div>
  );
}
