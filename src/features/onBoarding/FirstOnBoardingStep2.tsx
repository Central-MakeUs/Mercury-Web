import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";

export const FirstOnBoardingStep2 = () => {
  return (
    <div className="w-full h-full bg-navy">
      <Stack className="w-screen">
        <CenterStack className="gap-[10px] w-full items-center fixed top-[80px]">
          <Text
            variant={"body/16_m"}
            className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
          >{`짧은 시간 동안 몰입할 수 있도록\n타이머를 이용해 집중할 수 있어요`}</Text>
          <Text variant={"title/25_b"} className="text-white text-[29px]">
            독서 집중 타이머
          </Text>
        </CenterStack>

        <Image
          src={"/images/onboarding/onBoarding2.webp"}
          alt="onBoardingFunnel2"
          objectfit={"cover"}
          className="fixed z-[2] top-[10px]"
        />
        <Image
          src={"/images/onboarding/onBoardingBack.webp"}
          alt="onBoardingFunnel2"
          objectfit={"cover"}
          className="fixed z-[1] top-0"
        />
      </Stack>
    </div>
  );
};
