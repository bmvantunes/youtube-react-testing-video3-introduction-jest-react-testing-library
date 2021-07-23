import React, { useState } from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      Current Count: {count}
      <button aria-label="Add to Counter" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
