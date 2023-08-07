'use client'
import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect akan dijalankan setelah setiap render
  useEffect(() => {
    console.log('Component has rendered');
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
