import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      toast.error("Введите имя покемона");
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.reset();
  };

  reset = () => {
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemon"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />

        <button>Search</button>
      </form>
    );
  }
}
