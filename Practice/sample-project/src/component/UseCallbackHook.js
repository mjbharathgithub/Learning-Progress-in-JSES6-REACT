import React, { useState, useCallback } from 'react';

function ChildComponent({ handleClick }) {
  console.log('ChildComponent rendered');
  return <button onClick={handleClick}>Click me</button>;
}

function UseCallbackHook() {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only recreate the function if `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent handleClick={increment} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallbackHook;
