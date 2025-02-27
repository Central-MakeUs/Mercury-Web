import { Image } from "@repo/design-system/Image";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep3 = () => {
  return (
    <>
      <Image
        src={ONBOARDING_ASSETS.FIRSTONBOARDING3_WEBP}
        alt="onBoardingFunnel3"
        objectfit={"cover"}
      />
    </>
  );
};
