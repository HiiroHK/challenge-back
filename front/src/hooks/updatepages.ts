import { useState, useCallback } from "react";

export function useRefresh() {
  const [refreshFlag, setRefreshFlag] = useState(0);

  const triggerRefresh = useCallback(() => {
    setRefreshFlag((prev) => prev + 1);
  }, []);

  return { refreshFlag, triggerRefresh };
}
