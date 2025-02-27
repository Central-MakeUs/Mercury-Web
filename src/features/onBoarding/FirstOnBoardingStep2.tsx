import { Image } from "@repo/design-system/Image";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep2 = () => {
  return (
    <div className="w-full h-full bg-navy">
      <Image
        src={ONBOARDING_ASSETS.FIRSTONBOARDING2_WEBP}
        alt="onBoardingFunnel2"
        objectfit={"cover"}
      />
    </div>
  );
};
