import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Center } from "@repo/ui/Center";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { Link } from "react-router";
import { AppleButton } from "~/shared/ui/AppleButton";
import { GoogleButton } from "~/shared/ui/GoogleButton";
import { KakaoButton } from "~/shared/ui/KakaoButton";

export default function OnBoardingPage() {
  return (
    <CenterStack className=" min-h-screen w-full bg-navy h-full gap-y-[100px]">
      <MercuryImageSection />
      <SignUpSection />
    </CenterStack>
  );
}

const MercuryImageSection = () => {
  return (
    <CenterStack className=" w-full px-4">
      <Stack className=" w-full">
        <AspectRatio ratio={343 / 219}>
          <Image src={ONBOARDING_ASSETS.MERCURY_LOGIN_LOGO} alt="mercury logo" objectfit={"fill"} />
        </AspectRatio>
      </Stack>
      <Stack className=" mt-[30px] pl-[66px] pr-[54px] w-full">
        <AspectRatio ratio={255 / 52}>
          <Image
            src={ONBOARDING_ASSETS.WORDMARKLOGO_DARKBG}
            alt="wordmark logo"
            objectfit={"fill"}
          />
        </AspectRatio>
      </Stack>
    </CenterStack>
  );
};

const SignUpSection = () => {
  return (
    <Stack className=" gap-y-[14px] w-full items-center">
      <Flex>
        <Text variant={"body/14_m"} className=" text-gray-100">
          SNS 계정으로 간편하게 시작해요
        </Text>
      </Flex>
      <Center className=" gap-x-[18px] items-center w-full justify-center">
        <KakaoButton />
        <AppleButton />
        <GoogleButton />
      </Center>
      <Flex>
        <Link
          to={"/home"}
          className={cn(
            textVariants({ variant: "caption/12_r" }),
            " text-gray-300 underline underline-offset-4",
          )}
        >
          게스트로 둘러보기
        </Link>
      </Flex>
      <Spacing className=" h-[40px]" />
    </Stack>
  );
};

const ONBOARDING_ASSETS = {
  MERCURY_LOGIN_LOGO: "/images/logo/mercury_login_logo.webp",
  WORDMARKLOGO_DARKBG: "/images/logo/wordmarklogo_darkbg.webp",
};
