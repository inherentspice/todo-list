"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";

function Darkmode() {
  // Create a ref object to store the value of darkMode
  const darkModeRef = useRef(
    typeof window !== "undefined" && window.localStorage.getItem("theme") === "dark"
      ? true
      : false
  );

  // Use the value of the ref object to set the initial value of darkMode
  const [darkMode, setDarkMode] = useState(darkModeRef.current);

  // Use useMemo to store the value of darkMode in the ref object
  useMemo(() => {
    darkModeRef.current = darkMode;
  }, [darkMode]);

  useEffect(() => {
    // Initialize the value of darkModeRef.current with the value of window.localStorage.getItem('theme')
    const theme =
      typeof window !== "undefined" ? window.localStorage.getItem("theme") : undefined;
    darkModeRef.current = theme === "dark" ? true : false;

    // Set the initial value of darkMode
    setDarkMode(darkModeRef.current);
  }, []);

  useEffect(() => {
    if (darkMode !== undefined) {
      if (darkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.theme = "dark";

      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.removeItem("theme");
      }
    }
  }, [darkMode]);

  const handleToggle = (event) => {
    // Check the value of event.target.checked to determine the value of darkMode
    const newDarkMode = event.target.checked ? true : false;
    setDarkMode(newDarkMode);
  };
  return (
    <>
      <form action="#">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </form>
    </>
  );
}

export default Darkmode;
