import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import c from "./css/Characters.module.css";
import Character from "./Character";

function Characters({ characters }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={c.characters}>
      {characters.map((character) => (
        <Character theme={theme} character={character} />
      ))}
    </div>
  );
}

export default Characters;
