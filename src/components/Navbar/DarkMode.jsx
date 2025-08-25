import React from "react";
import LightButton from "../../assets/light.png";
import DarkButton from "../../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    const root = document.documentElement;
    const navbar = document.querySelector(".navbar"); // Changed to target navbar by class
    
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.color = "#ffffff";
      root.style.backgroundColor = "#1a202c";
      if (navbar) {
        navbar.style.backgroundColor = "#2d3748";
        navbar.style.color = "#ffffff";
      }
    } else {
      root.classList.remove("dark");
      root.style.color = "#000000";
      root.style.backgroundColor = "#ffffff";
      if (navbar) {
        navbar.style.backgroundColor = "#f8fafc";
        navbar.style.color = "#000000";
      }
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;