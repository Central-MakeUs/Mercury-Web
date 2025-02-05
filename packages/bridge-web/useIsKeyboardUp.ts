import { usePrevious } from "~/shared/hooks/usePrevious";
import useWindowHeight from "~/shared/hooks/useWindowHeight";

export const useIsKeyboardUp = () => {
  const height = useWindowHeight();
  const previousHeight = usePrevious(height);

  return previousHeight > height;
};
