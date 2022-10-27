import PropTypes from "prop-types";

export const CurrentPage = ({ current, total }) => {
  return (
    <>
      <p>
        {current + 1}/{total.length}
      </p>
    </>
  );
};

CurrentPage.propTypes = {
  total: PropTypes.arrayOf(PropTypes.shape({})),

  current: PropTypes.number.isRequired,
};
