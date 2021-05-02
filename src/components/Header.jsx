import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import h from "./css/Header.module.css";
const Header = (props) => {
  const width = useContext(ThemeContext);

  return (
    <div className={h.header}>
      <div className={h.container}>
        <div className={h.title}>
          <img style={{ width: width }} src="/rick_and_morty_logo.png" alt="" />
        </div>
        <button
          className={props.darkMode ? h.btnmodedark : h.btnmodelight}
          type="button"
          onClick={props.onHandleClick}
        >
          {props.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
