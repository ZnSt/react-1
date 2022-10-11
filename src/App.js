import "./App.css";
import paintings from "./painting.json";
import PaintingList from "./components/PaintingList";
import Sections from "./components/Sections";

export default function App() {
  return (
    <div>
      <Sections title="Топ недели">
        <PaintingList items={paintings} />
      </Sections>
    </div>
  );
}
