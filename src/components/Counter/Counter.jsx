import { useState, useEffect } from "react";

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    const totalClick = counterA + counterB;

    document.title = `Всего кликнули ${totalClick} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули CouinterA {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули CouinterB {counterB} раз
      </button>
    </>
  );
};
