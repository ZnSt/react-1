import PropTypes from "prop-types";

export const Publications = ({ currentItem }) => {
  return (
    <article>
      <h2>{currentItem.title}</h2>
      <p>{currentItem.text}</p>
    </article>
  );
};

Publications.propTypes = {
  currentItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
