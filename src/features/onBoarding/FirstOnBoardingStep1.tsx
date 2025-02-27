import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";

export const FirstOnBoardingStep1 = () => {
  return (
    <Stack className="w-screen">
      <CenterStack className="gap-[10px] w-full fixed top-[80px]">
        <Text
          variant={"body/16_m"}
          className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
        >{`책을 읽으면서 들었던 생각을\n가볍게 메모로 남겨보세요`}</Text>
        <Text variant={"title/25_b"} className="text-white text-[29px]">
          간단한 독서기록
        </Text>
      </CenterStack>
      <AspectRatio ratio={375 / 700}>
        <Image
          src={"/images/onboarding/onBoarding1.webp"}
          alt="onBoardingFunnel1"
          objectfit={"cover"}
          className="fixed z-[2] top-[10px]"
        />
      </AspectRatio>
      <Image
        src={"/images/onboarding/onBoardingBack.webp"}
        alt="onBoardingFunnel2"
        objectfit={"cover"}
        className="fixed z-[1] top-0"
      />
    </Stack>
  );
};
