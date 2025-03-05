import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { ONBOARDING_ASSETS } from "~/shared/images/onboarding/onboardingImages";

export const FirstOnBoardingStep3 = () => {
  return (
    <Stack className="w-screen h-screen max-w-[450px] bg-navy ">
      <CenterStack className="gap-[10px] w-full mt-10">
        <Text
          variant={"body/16_m"}
          className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
        >{`꾸준히 독서기록을 쌓으며\n책 읽는 습관을 들일 수 있어요`}</Text>
        <Text variant={"title/25_b"} className="text-white text-[29px]">
          쉽게 만드는 독서 습관
        </Text>
      </CenterStack>

      <Image
        src={ONBOARDING_ASSETS.ONBOARDING3_WEBP}
        alt="onBoardingFunnel3"
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
