import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASS":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const ReducerDemo2 = () => {
  const initialState = { email: "", password: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state',state)
  return (
    <form>
        <h1>useReducer: Multiple Related States</h1>
      <input
        type="email"
        onChange={(e) => {
          dispatch({ type: "SET_EMAIL", payload: e.target.value });
        }}
      />
      <input
        type="password"
        onChange={(e) =>
          dispatch({ type: "SET_PASS", payload: e.target.value })
        }
      />
    </form>
  );
};
