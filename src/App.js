import { ToastContainer } from "react-toastify";

import { SignupForm } from "./components/SignupFrom";
import { ColorPicker } from "./components/ColorPicker";
import { Counter } from "./components/Counter";
import { Clock } from "./components/Clock";
import { Pokemon } from "./components/Pokemon";
export function App() {
  return (
    <div>
      {/* <SignupForm /> */}
      {/* <ColorPicker /> */}
      {/* <Counter /> */}
      {/* <Clock /> */}
      <Pokemon />
      <ToastContainer />
    </div>
  );
}
