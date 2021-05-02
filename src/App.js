import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <Header onHandleClick={handleClick} darkMode={darkMode} />
      <Characters darkMode={darkMode} />
    </div>
  );
}

export default App;
