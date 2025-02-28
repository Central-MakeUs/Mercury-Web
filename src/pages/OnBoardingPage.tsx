import { AspectRatio } from "@repo/design-system/AspectRatio";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { Pressable } from "@repo/design-system/Pressable";
import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { env } from "@repo/env";
import { Center } from "@repo/ui/Center";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { authStore } from "~/entities/user/model/auth.store";
import { LOGO_ASSETS } from "~/shared/images/logo/logoImages";
import { AppleButton } from "~/shared/ui/AppleButton";
import { KakaoButton } from "~/shared/ui/KakaoButton";
import { openWindowUrl } from "~/shared/utils/openWindowUrl";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = authStore.getAccessToken();
    if (accessToken) {
      navigate("/book-record");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("hasVisited", "true");
  }, []);

  return (
    <CenterStack className=" min-h-screen w-full bg-navy h-full gap-y-[100px]">
      <MercuryImageSection />
      <SignUpSection />
    </CenterStack>
  );
}

const MercuryImageSection = () => {
  const navigate = useNavigate();
  const onboardingAgain = () => {
    localStorage.setItem("hasVisited", "false");
    navigate("/");
  };
  return (
    <CenterStack className=" w-full px-4">
      <Stack className=" w-full">
        <Pressable
          delay={env.DEV ? 0 : 5000}
          onPressComplete={() => {
            navigate("/login");
          }}
        >
          <AspectRatio ratio={343 / 219}>
            <Image
              src={LOGO_ASSETS.MERCURY_LOGIN_LOGO_WEBP}
              alt="mercury logo"
              objectfit={"fill"}
            />
          </AspectRatio>
        </Pressable>
      </Stack>

      <Stack className=" mt-[30px] pl-[66px] pr-[54px] w-full">
        <AspectRatio ratio={255 / 52}>
          <button onClick={onboardingAgain}>
            <Image
              src={LOGO_ASSETS.WORDMARKLOGO_DARKBG_WEBP}
              alt="wordmark logo"
              objectfit={"fill"}
            />
          </button>
        </AspectRatio>
      </Stack>
    </CenterStack>
  );
};

const SignUpSection = () => {
  return (
    <Stack className="gap-y-[14px] w-full items-center">
      <Flex>
        <Text variant={"body/14_m"} className=" text-gray-100">
          SNS 계정으로 간편하게 시작해요
        </Text>
      </Flex>
      <Center className=" gap-x-[18px] items-center w-full justify-center">
        <AppleButton
          onClick={() => openWindowUrl(ONBOARDING_LINKS.APPLE_LOGIN, { target: "_self" })}
        />
        <KakaoButton
          onClick={() => {
            openWindowUrl(ONBOARDING_LINKS.KAKAO_LOGIN, { target: "_self" });
          }}
        />
      </Center>
      <Flex>
        <Link
          to={"/book-record"}
          className={cn(
            textVariants({ variant: "caption/12_r" }),
            " text-gray-300 underline underline-offset-4",
          )}
        >
          게스트로 둘러보기
        </Link>
      </Flex>
      <FixedBottom className="w-full flex justify-center items-center gap-1 bottom-[68px]">
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-full" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-full" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-full" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-full" />
        <div className="w-[10px] h-[6px] bg-white rounded-full" />
      </FixedBottom>
    </Stack>
  );
};

const ONBOARDING_LINKS = {
  GOOGLE_LOGIN: `https://api.mercuryplanet.co.kr/oauth2/authorization/google`,
  APPLE_LOGIN: `https://api.mercuryplanet.co.kr/oauth2/authorization/apple`,
  KAKAO_LOGIN: `https://api.mercuryplanet.co.kr/oauth2/authorization/kakao`,
};
