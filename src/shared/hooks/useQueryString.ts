import { useRef, useSyncExternalStore } from "react";

type UseQueryStringProps = Record<string, string | number | boolean>;

export const useQueryString = <T extends UseQueryStringProps>(
  initialValue: T,
  options?: { dependencies?: Array<keyof T> },
) => {
  const lastSnapshot = useRef<T | null>(null);
  const lastSearch = useRef<string | null>(null);

  const getSnapshot = (): T => {
    const currentSearch = window.location.search;

    // 이전 검색 문자열과 동일하면 캐시된 스냅샷 반환
    if (lastSearch.current === currentSearch && lastSnapshot.current) {
      return lastSnapshot.current;
    }

    const params = new URLSearchParams(currentSearch);
    const obj: Partial<T> = { ...initialValue };

    params.forEach((value, key) => {
      if (key in initialValue) {
        const initialType = typeof initialValue[key as keyof T];
        //@ts-ignore
        obj[key as keyof T] =
          initialType === "number"
            ? (Number(value) as T[keyof T])
            : initialType === "boolean"
              ? value === ("true" as T[keyof T])
              : (value as T[keyof T]);
      }
    });

    // 새로운 스냅샷과 검색 문자열 캐시
    lastSnapshot.current = obj as T;
    lastSearch.current = currentSearch;

    return obj as T;
  };

  const getServerSnapshot = (): T => initialValue;

  const subscribe = (callback: () => void) => {
    let previousValues: Partial<T> = {};

    if (options?.dependencies) {
      const currentValues = getSnapshot();
      previousValues = options.dependencies.reduce(
        (acc, key) => {
          acc[key] = currentValues[key];
          return acc;
        },
        {} as Partial<T>,
      );
    }

    const onChange = () => {
      if (options?.dependencies) {
        const currentValues = getSnapshot();
        const hasChanges = options.dependencies.some(
          (key) => !isEqual(previousValues[key], currentValues[key]),
        );

        if (hasChanges) {
          previousValues = options.dependencies.reduce(
            (acc, key) => {
              acc[key] = currentValues[key];
              return acc;
            },
            {} as Partial<T>,
          );
          callback();
        }
      } else {
        callback();
      }
    };

    window.addEventListener("popstate", onChange);

    const patchHistoryMethod = (method: "pushState" | "replaceState") => {
      const original = history[method];
      history[method] = function (...args) {
        original.apply(this, args);
        onChange();
      };
    };

    patchHistoryMethod("pushState");
    patchHistoryMethod("replaceState");

    return () => {
      window.removeEventListener("popstate", onChange);
    };
  };

  const query = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setQuery = (newState: Partial<T>, options: { replace?: boolean } = {}) => {
    const params = new URLSearchParams(window.location.search);

    Object.entries(newState).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    if (options.replace) {
      window.history.replaceState({}, "", newUrl);
    } else {
      window.history.pushState({}, "", newUrl);
    }

    window.dispatchEvent(new Event("popstate")); // 강제 상태 업데이트
  };

  return [query, setQuery] as const;
};

function isEqual(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === "object") {
    const aEntries = Object.entries(a);
    const bEntries = Object.entries(b);

    if (aEntries.length !== bEntries.length) {
      return false;
    }

    return aEntries.every(([key, value]) => b[key as any] === value);
  }

  return false;
}
