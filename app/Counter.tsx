"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Current count: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
