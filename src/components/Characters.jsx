import React, { useEffect, useState } from "react";
import c from "./css/Characters.module.css";

function Characters({ darkMode, characters }) {
  return (
    <div className={c.characters}>
      {characters.map((character, i) => (
        <div key={i} className={darkMode ? c.carddark : c.cardlight}>
          <h2 className={c.card_title}>{character.name}</h2>
          <img src={character.image} alt="" />
          <div className={c.card_info}>
            <div>
              <b>Gender</b>: {character.gender}
            </div>
            <div>
              <b>Species</b>: {character.species}
            </div>
            {character && character.type && (
              <div>
                <b>Type</b>: {character.type}
              </div>
            )}
            <div>
              <b>Status</b>: {character.status}
            </div>
            <div>
              <b>Location</b>: {character.location.name}
            </div>
            <div>
              <b>Origin</b>: {character.origin.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
