import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import h from "./css/Header.module.css";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };
  return (
    <div className={h.header}>
      <div className={h.container}>
        <div className={h.title}>
          <img className={h.image} src="/rick_and_morty_logo.png" alt="" />
        </div>
        <button
          className={theme ? h.btnmodedark : h.btnmodelight}
          type="button"
          onClick={handleClick}
        >
          {theme ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Header;
