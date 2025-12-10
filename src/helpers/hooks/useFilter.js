import { useState } from "react";

export function useFilter(initialFilter) {
  const [filter, setFilter] = useState(initialFilter);

  function chengeFilter(key, value) {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return { filter, chengeFilter };
}
