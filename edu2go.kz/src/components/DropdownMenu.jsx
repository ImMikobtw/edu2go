import { useState } from "react";
import { motion } from "framer-motion"; // Импортируем анимацию
import "../styles/DropdownMenu.css";

export function DropdownMenu({ title, items, isOpen, onToggle }) {
  return (
    <div className="dropdownMenu">
      <button className="dropdownButton" onClick={onToggle}>
        {title}
      </button>

      <motion.ul
        className="dropdownContent"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </motion.ul>
    </div>
  );
}

