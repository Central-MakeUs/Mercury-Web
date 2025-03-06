import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Stack } from "@repo/ui/Stack";

export const FirstOnBoardingStep4 = () => {
  return (
    <Stack className="w-screen max-w-[450px] h-full">
      <AspectRatio ratio={375 / 800}>
        <Image
          src="/images/onboarding/onBoardingFunnel4.webp"
          alt="onBoardingFunnel2"
          objectfit={"cover"}
          className="absolute bottom-[100px]"
        />
      </AspectRatio>
    </Stack>
  );
};
