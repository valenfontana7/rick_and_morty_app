import React from "react";
import c from "./css/Character.module.css";

function Character({ theme, character }) {
  return (
    <div key={character.id} className={theme ? c.carddark : c.cardlight}>
      <img src={character.image} alt="character_image" />
      <h2 className={c.card_title}>{character.name}</h2>
      <div className={c.card_info}>
        <div>
          <h3>Gender:</h3>{" "}
          <p>
            {character.gender === "Male"
              ? `♂️`
              : character.gender === "Female"
              ? `♀️`
              : character.gender === "unknown"
              ? "❓"
              : character.gender}
          </p>
        </div>
        <div>
          <h3>Species:</h3>{" "}
          <p>
            {character.species === "Alien"
              ? "👽"
              : character.species === "Human"
              ? "🧑🏽"
              : character.species === "Animal"
              ? "🐕"
              : character.species === "Robot"
              ? "🤖"
              : character.species === "unknown"
              ? "❓"
              : character.species}
          </p>
        </div>
        <div>
          <h3>Type:</h3>{" "}
          <p>
            {character.type === "unknown"
              ? "❓"
              : character.type === "Parasite"
              ? "🪱"
              : character.type === "Dog"
              ? "🐕"
              : character.type === "Demon"
              ? "👹"
              : character.type === "Vampire"
              ? "🧛🏼"
              : character.type || "❓"}
          </p>
        </div>
        <div>
          <h3>Status:</h3>{" "}
          <p>
            {character.status === "Alive"
              ? "🔥"
              : character.status === "Dead"
              ? "☠️"
              : character.status === "unknown"
              ? "❓"
              : character.status}
          </p>
        </div>
        <div>
          <h3>Location:</h3>{" "}
          <p>
            {character.location.name.slice(0, 5) === "Earth"
              ? "🌎"
              : character.location.name === "unknown"
              ? "❓"
              : character.location.name}
          </p>
        </div>
        <div>
          <h3>Origin:</h3>{" "}
          <p>
            {character.origin.name.slice(0, 5) === "Earth"
              ? "🌎"
              : character.origin.name === "unknown"
              ? "❓"
              : character.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
