import { env } from "@repo/env";
import { worker } from "@repo/mocks/browser";
import { Box } from "@repo/ui/Box";
import { ToggleButton } from "@repo/ui/ToggleButton";
import { useDraft } from "@xionwcfm/react";
import { useEffect } from "react";

export const MswDevTools = (props: { enabled: boolean }) => {
  const [enabled, setEnabled] = useDraft(props.enabled);

  useEffect(() => {
    if (env.DEV && enabled) {
      worker.start();
    }

    if (env.DEV && !enabled) {
      worker.stop();
    }
  }, [enabled]);

  if (env.PROD) {
    return null;
  }

  return (
    <Box className=" fixed z-50 bottom-[16px] left-[16px]">
      <ToggleButton
        className=" text-white bg-gray-200 data-[state=selected]:bg-purple-500 rounded-full w-[48px] h-[48px] flex justify-center items-center transition-all duration-200"
        selected={enabled}
        onClick={() => setEnabled((prev) => !prev)}
      >
        MSW
      </ToggleButton>
    </Box>
  );
};
