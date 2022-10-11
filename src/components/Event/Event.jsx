import PropTypes from 'prop-types';
import css from './Event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';

export function Event({ name, location, speaker, type, start, end }) {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
