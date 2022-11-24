import { useState } from "react";
import { PokemonForm } from "../PokemonForm/";
import { PokemonInfo } from "../PokemonInfo";
export const Pokemon = () => {
  const { pokemonName, setPokemonName } = useState("");

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};
