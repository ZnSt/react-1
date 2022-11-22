import { useState, useEffect } from "react";

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };

  const handleCounterBDecrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;

    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули Counter A {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBDecrement}>
        Кликнули Counter B {counterB} раз
      </button>
    </>
  );
};
