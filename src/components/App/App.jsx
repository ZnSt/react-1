import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomigEvents from '../../../src/upcoming-events.json';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Colation Conference" />
      <EventBoard events={upcomigEvents} />
    </Container>
  );
}
