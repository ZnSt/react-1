import { useState, useEffect } from "react";
import pokemonAPI from "../../services/api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter pokemon name</div>;
  }

  if (status === Status.PENDING) {
    return;
  }

  if (status === Status.REJECTED) {
    return;
  }

  if (status === Status.RESOLVED) {
    return;
  }
};
