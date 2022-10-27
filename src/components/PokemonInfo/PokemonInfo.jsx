import { Component } from "react";
import { PokemonErrorView } from "../PokemonErrorView/";
import { PokemonDataView } from "../PokemonDataView";
import { PokemonPendingViews } from "../PokemonPendingViews";
import { fetchPokemon } from "../../services/poke-api";

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (nextName !== prevName) {
      this.setState({ status: "pending" });

      fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Введите имя покемона</div>;
    }

    if (status === "pending") {
      return <PokemonPendingViews pokemon={pokemonName} />;
    }
    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return (
        <>
          <PokemonDataView pokemon={pokemon} />
        </>
      );
    }
  }
}
