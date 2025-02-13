import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number = 500) {
  const [debValue, setDebValue] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debValue;
}

export default useDebounce;
