import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, timeout = 0) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debouncedValue;
}
