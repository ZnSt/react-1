import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChangeName = (event) => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pokemonName.trim() === "") {
      toast("Enter pokemon name");
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemonName" value={pokemonName} onChange={handleChangeName} />
      <button type="submit">Search</button>
    </form>
  );
};
