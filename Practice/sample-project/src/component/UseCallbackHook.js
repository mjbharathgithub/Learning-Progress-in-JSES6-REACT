import React, { useState, useCallback } from 'react';

function ChildComponent({ handleClick }) {
  console.log('ChildComponent rendered');
  return <button onClick={handleClick}>Click me from child</button>;
}

function UseCallbackHook() {
  const [pcount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // Memoize the increment function
  const childIncrement = useCallback(() => {
    setChildCount(childCount + 1);
  }, [childCount]); // Only recreate the function if `count` changes
  const parentIncrement = () => {
    setParentCount(pcount + 1);
  };

  return (
    <div>
      <h2>UseCallbackHook</h2>
      <h1>parentCount: {pcount}  childCount : {childCount}</h1>
      <ChildComponent handleClick={childIncrement} />
      <button onClick={parentIncrement}>Increment</button>
    </div>
  );
}

export default UseCallbackHook;
//note the parent function re-rendering does'nt affect the child function until the child state is modified or the dependancy state is changed (the dependancy array works as usual)