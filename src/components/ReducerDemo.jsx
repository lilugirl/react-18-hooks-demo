import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
  }
};

export const ReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
    </div>
  );
};
