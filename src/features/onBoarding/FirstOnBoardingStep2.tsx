import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep2 = () => {
  return (
    <Stack className="w-screen h-screen max-w-[450px] bg-navy ">
      <CenterStack className="gap-[10px] w-full mt-10">
        <Text
          variant={"body/16_m"}
          className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
        >{`짧은 시간 동안 몰입할 수 있도록\n타이머를 이용해 집중할 수 있어요`}</Text>
        <Text variant={"title/25_b"} className="text-white text-[29px]">
          독서 집중 타이머
        </Text>
      </CenterStack>

      <Image
        src={ONBOARDING_ASSETS.ONBOARDING2_WEBP}
        alt="onBoardingFunnel2"
        objectfit={"cover"}
        className="absolute z-[2]"
      />

      <Image
        src={ONBOARDING_ASSETS.ONBOARDINGBACK_WEBP}
        alt="onBoardingFunnelBack"
        objectfit={"cover"}
        className="absolute z-[1]"
      />
    </Stack>
  );
};
