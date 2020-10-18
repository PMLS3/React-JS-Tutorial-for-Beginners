import React, { useState, useEffect } from "react";
import "./Nav.css";
export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="../assets/netflix.png" alt="logo" />

      <img className="nav_avatar" src="../assets/netflix.png" alt="logo" />
    </div>
  );
}
