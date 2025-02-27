import { Image } from "@repo/design-system/Image";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep1 = () => {
  return (
    <>
      <Image
        src={ONBOARDING_ASSETS.FIRSTONBOARDING1_WEBP}
        alt="onBoardingFunnel1"
        objectfit={"cover"}
      />
    </>
  );
};
