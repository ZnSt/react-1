import PropTypes from 'prop-types';
import { Card, EventName, Info, Chip } from './Event.styled';
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
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt />
        {location}
      </Info>
      <Info>
        <FaUserAlt />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />
        {formatedStart}
      </Info>
      <Info>
        <FaClock />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
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
