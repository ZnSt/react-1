import PropTypes from "prop-types";

export default function Sections({ title, children }) {
  return (
    <div>
      {title ?? <h1>{title}</h1>} {children}
    </div>
  );
}

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
