import { IconName } from 'react-icons/fa';

import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import upcomigEvents from '../upcoming-events.json';

export function App() {
  return (
    <>
      <PageTitle text="24th Core Worlds Colation Conference" />
      <EventBoard events={upcomigEvents} />
    </>
  );
}
