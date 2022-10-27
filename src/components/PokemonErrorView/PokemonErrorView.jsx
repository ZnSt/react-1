import errorImage from "../../image/catCry.jpeg";

export const PokemonErrorView = ({ message }) => {
  return (
    <div>
      <img src={errorImage} width="240" alt="crycat" />
      <p>{message}</p>
    </div>
  );
};
