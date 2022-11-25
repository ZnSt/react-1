import { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}

function init(initialState) {
  return {
    ...initialState,
    count: initialState.count + 100,
  };
}

export const SecondCounter = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    {
      count: 0,
    },
    init
  );

  return (
    <div>
      <p>{state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Увеличить
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Уменьшить
      </button>
    </div>
  );
};
