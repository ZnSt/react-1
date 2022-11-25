import { ToastContainer } from "react-toastify";

import { SignupForm } from "./components/SignupFrom";
import { ColorPicker } from "./components/ColorPicker";
import { Counter } from "./components/Counter";
import { Clock } from "./components/Clock";
import { Pokemon } from "./components/Pokemon";
import { SecondCounter } from "./components/SecondCounter";
import { Friends } from "./components/Friends";
export function App() {
  return (
    <div>
      {/* <SignupForm /> */}
      {/* <ColorPicker /> */}
      {/* <Counter /> */}
      {/* <Clock /> */}
      {/* <Pokemon /> */}
      {/* <SecondCounter /> */}
      <Friends />
      <ToastContainer />
    </div>
  );
}
