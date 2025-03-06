import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Stack } from "@repo/ui/Stack";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep4 = () => {
  return (
    <Stack className="w-screen max-w-[450px] h-full">
      <AspectRatio ratio={375 / 800}>
        <Image
          src={ONBOARDING_ASSETS.ONBOARDINGFUNNEL4_WEBP}
          alt="onBoardingFunnel2"
          objectfit={"cover"}
          className="absolute bottom-[100px]"
        />
      </AspectRatio>
    </Stack>
  );
};
