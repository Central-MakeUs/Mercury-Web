import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";

export const FirstOnBoardingStep1 = () => {
  return (
    <Stack className="w-screen max-w-[450px] bg-navy">
      <Stack className="relative">
        <CenterStack className="gap-[10px] w-full z-[2] mt-10 absolute top-0">
          <Text
            variant={"body/16_m"}
            className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
          >{`책을 읽으면서 들었던 생각을\n가볍게 메모로 남겨보세요`}</Text>
          <Text variant={"title/25_b"} className="text-white text-[29px]">
            간단한 독서기록
          </Text>
        </CenterStack>

        <AspectRatio ratio={375 / 800} className="z-[2] absolute">
          <Image
            src={"/images/onboarding/onBoarding1.webp"}
            alt="onBoardingFunnel1"
            objectfit={"cover"}
            className="z-[2] absolute"
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
