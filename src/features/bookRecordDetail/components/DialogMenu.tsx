import { Button } from "@repo/design-system/Button";
import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Stack } from "@repo/ui/Stack";

export const DialogMenu = () => {
  return (
    <Stack className="min-w-[225px] px-4">
      <Button
        className={cn("text-gray-600 bg-white text-left", textVariants({ variant: "body/15_m" }))}
      >
        메모 수정하기
      </Button>
      <Button
        className={cn("text-gray-600 bg-white text-left", textVariants({ variant: "body/15_m" }))}
      >
        메모 삭제하기
      </Button>
    </Stack>
  );
};
