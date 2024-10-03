import React, { useMemo, useState } from 'react';

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Simulating an expensive calculation and memoizing the result
  const result = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Hook Explained</h1>
      <h1>Expensive Calculation Result: {result}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type something" />
      
    </div>
  );
}

export default UseMemoHook;
