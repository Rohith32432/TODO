import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'sub':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function add() {
    dispatch({ type: 'add' });
  }

  function sub() {
    dispatch({ type: 'sub' });
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
    </div>
  );
}

export default Reducer;
