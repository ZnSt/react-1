import "./App.css";
import publications from "./publication.json";
import { Reader } from "./components/Reader";

export default function App() {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
}
