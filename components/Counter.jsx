"use client";
import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button>-</button>
    </div>
  );
}

export default Counter;
