import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep1 = () => {
  return (
    <Stack className="w-screen h-screen max-w-[450px] bg-navy ">
      <CenterStack className="gap-[10px] w-full mt-10">
        <Text
          variant={"body/16_m"}
          className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
        >{`책을 읽으면서 들었던 생각을\n가볍게 메모로 남겨보세요`}</Text>

        <Text variant={"title/25_b"} className="text-white text-[29px]">
          간단한 독서기록
        </Text>
      </CenterStack>

      <Image
        src={ONBOARDING_ASSETS.ONBOARDINGFUNNEL1_WEBP}
        alt="onBoardingFunnel1"
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
