import { useState } from "react";

export default function useCounter(initialValue = 0, options = {}) {
  const { min, max } = options;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((p) => {
      if (max !== undefined && p >= max) return p;
      return p + 1;
    });
  };
  const decrement = () => {
    setCount((p) => {
      if (min !== undefined && p <= min) return p;
      return p - 1;
    });
  };
  const reset = () => setCount(initialValue);

  return { count, min, max, increment, decrement, reset };
}
