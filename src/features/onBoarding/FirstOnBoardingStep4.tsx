import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { HOME_ASSETS } from "~/shared/images/home/homeImages";

export const FirstOnBoardingStep4 = () => {
  return (
    <Stack className="w-screen">
      <CenterStack className="gap-[10px] w-full fixed top-[80px]">
        <Text
          variant={"body/16_m"}
          className="text-gray-100 whitespace-pre-wrap opacity-80 text-center"
        >{`머큐리는 기록을 쌓으면 무럭무럭 자라요\n머큐리와 함께 성장해 보세요!`}</Text>
        <Text variant={"title/25_b"} className="text-white text-[29px]">
          머큐리와 함께
        </Text>
      </CenterStack>

      <Image
        src={HOME_ASSETS.HOME_MERCURY_WEBP}
        alt="mercury character"
        objectfit={"fill"}
        className="px-[36px] z-[2] fixed top-[200px]"
      />
      <Image
        src={"/images/onboarding/onBoarding4.webp"}
        alt="onBoardingFunnel4"
        objectfit={"cover"}
        className="fixed z-[2] bottom-[100px]"
      />
      <Image
        src={"/images/onboarding/onBoardingBack.webp"}
        alt="onBoardingFunnel2"
        objectfit={"cover"}
        className="fixed z-[1] top-0"
      />
    </Stack>
  );
};
