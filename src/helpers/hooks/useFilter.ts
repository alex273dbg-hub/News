import { useState } from "react";
import type { IFilters } from "../../interface";

export function useFilter(initialFilter: IFilters) {
  const [filter, setFilter] = useState<IFilters>(initialFilter);

  function chengeFilter(key: string, value: string | null | number) {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return { filter, chengeFilter };
}
