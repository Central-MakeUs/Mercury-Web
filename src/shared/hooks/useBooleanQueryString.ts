import { useCallback } from "react";
import { useQueryString } from "~/shared/hooks/useQueryString";

export const useBooleanQueryString = (key: string, initialValue: boolean) => {
  const [query, setQuery] = useQueryString({ [key]: initialValue }, { dependencies: [key] });

  const onOpenChange = useCallback(
    (bool: boolean) => {
      setQuery({ [key]: bool });
    },
    [setQuery, key],
  );

  const toggle = useCallback(() => {
    setQuery({ [key]: !query[key] });
  }, [setQuery, query, key]);

  return [query[key] ?? initialValue, onOpenChange, toggle] as const;
};
