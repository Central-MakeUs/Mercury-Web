import { Image } from "@repo/design-system/Image";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep4 = () => {
  return (
    <>
      <Image
        src={ONBOARDING_ASSETS.FIRSTONBOARDING4_WEBP}
        alt="onBoardingFunnel4"
        objectfit={"cover"}
      />
    </>
  );
};
