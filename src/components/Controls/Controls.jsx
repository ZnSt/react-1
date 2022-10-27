import PropTypes from "prop-types";

export const Controls = ({ current, total, onChange }) => {
  return (
    <section>
      <button type="button" disabled={current === 1} onClick={() => onChange(-1)}>
        Назад
      </button>
      <button type="button" disabled={current === total.length} onClick={() => onChange(+1)}>
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  total: PropTypes.arrayOf(PropTypes.shape({})),
  current: PropTypes.number.isRequired,
};
