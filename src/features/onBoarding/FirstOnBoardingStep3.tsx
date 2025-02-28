import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";

export const FirstOnBoardingStep3 = () => {
  return (
    <Stack className="w-screen max-w-[450px] bg-navy">
      <Stack className="relative">
        <CenterStack className="gap-[10px] w-full z-[2] mt-10 absolute top-0">
          <Text
            variant={"body/16_m"}
            className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
          >{`꾸준히 독서기록을 쌓으며\n책 읽는 습관을 들일 수 있어요`}</Text>
          <Text variant={"title/25_b"} className="text-white text-[29px]">
            쉽게 만드는 독서 습관
          </Text>
        </CenterStack>

        <AspectRatio ratio={375 / 800} className="z-[2] absolute">
          <Image
            src={"/images/onboarding/onBoarding3.webp"}
            alt="onBoardingFunnel1"
            objectfit={"cover"}
          />
        </AspectRatio>
      </Stack>

      <Image
        src={"/images/onboarding/onBoardingBack.webp"}
        alt="onBoardingFunnel2"
        objectfit={"cover"}
        className="absolute inset-0 z-[1]"
      />
    </Stack>
  );
};
