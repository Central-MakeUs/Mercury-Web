import { Image } from "@repo/design-system/Image";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep3 = () => {
  return (
    <div className="w-full h-full bg-navy">
      <Image
        src={ONBOARDING_ASSETS.FIRSTONBOARDING3_WEBP}
        alt="onBoardingFunnel3"
        objectfit={"cover"}
      />
    </div>
  );
};
