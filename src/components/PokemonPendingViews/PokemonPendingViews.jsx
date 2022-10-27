import { AiOutlineLoading3Quarters } from "react-icons/ai";
import pendingImage from "../../image/pending.png";
import { PokemonDataView } from "../PokemonDataView";
import "./PokemonPendingViews.css";

export const PokemonPendingViews = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <div>
        <AiOutlineLoading3Quarters size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
