import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // The dependency array is empty, so this function will not change

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []); // The dependency array is empty, so this function will not change

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
