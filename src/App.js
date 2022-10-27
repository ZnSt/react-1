import "./App.css";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonForm } from "./components/PokemonForm";

export class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}
