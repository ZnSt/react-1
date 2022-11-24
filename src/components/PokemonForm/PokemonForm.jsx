import { useState } from "react";

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChangeName = (event) => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pokemonName.trim() === "") {
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleChangeName}
        placeholder="Enter a pokemon name"
      />
      <button type="submit">Search</button>
    </form>
  );
};
