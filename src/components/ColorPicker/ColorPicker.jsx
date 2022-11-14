import { useState } from "react";
import colors from "../../data/colors.js";

export const ColorPicker = () => {
  const [activeOptionsIdx, setActiveOptionsIdx] = useState(0);
  const { label } = colors[activeOptionsIdx];

  return (
    <div>
      <h2>Color Picker</h2>
      <p>Выбран цвет: {label} </p>
      <div>
        {colors.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            style={{ background: color }}
            onClick={() => setActiveOptionsIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
