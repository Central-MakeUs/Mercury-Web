import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Button } from "@repo/design-system/Button";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { Text, textVariants } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { cn } from "@repo/design-system/cn";
import { CheckIconHome } from "@repo/icon/CheckIconHome";
import { Center } from "@repo/ui/Center";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useState } from "react";
import { Link } from "react-router";
import { AppleButton } from "~/shared/ui/AppleButton";
import { GoogleButton } from "~/shared/ui/GoogleButton";
import { openExternalUrl } from "~/shared/utils/openExternalUrl";

export default function OnBoardingPage() {
  return (
    <CenterStack className=" min-h-screen w-full bg-navy h-full gap-y-[100px]">
      <MercuryImageSection />
      {/* <SignUpSection /> */}
      <TermsPrivacyConsentSection />
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

const _SignUpSection = () => {
  return (
    <Stack className="gap-y-[14px] w-full items-center">
      <Flex>
        <Text variant={"body/14_m"} className=" text-gray-100">
          SNS 계정으로 간편하게 시작해요
        </Text>
      </Flex>
      <Center className=" gap-x-[18px] items-center w-full justify-center">
        {/* <KakaoButton onClick={() => toast.main("준비중인 기능이에요", { duration: 1500 })} /> */}
        <AppleButton onClick={() => toast.main("준비중인 기능이에요", { duration: 1500 })} />
        <GoogleButton onClick={() => toast.main("준비중인 기능이에요", { duration: 1500 })} />
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
      <Spacing className=" h-[40px]" />
    </Stack>
  );
};

const TermsPrivacyConsentSection = () => {
  const [termsOfService, setTermsOfService] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const allChecked = termsOfService && privacyConsent;

  const handleToggleAll = () => {
    const currentlyAllChecked = termsOfService && privacyConsent;
    setTermsOfService(!currentlyAllChecked);
    setPrivacyConsent(!currentlyAllChecked);
  };

  const handleNotionClick = () => {
    openExternalUrl(ONBOARDING_LINKS.TERMS_PRIVACY_CONSENT);
  };

  const handleConfirm = () => {
    if (allChecked) {
      alert("약관 동의 완료!");
    }
  };

  return (
    <Stack className="h-full w-full justify-between">
      <Stack className="px-[67px] gap-[14px]">
        <button className="" onClick={handleToggleAll}>
          <Flex className="gap-[15px]">
            <CheckIconHome checked={allChecked} />
            <Text variant={"body/16_sb"} className="text-gray-100">
              모두 동의하기
            </Text>
          </Flex>
        </button>
        <div className="h-[1px] w-full bg-gray-500"></div>

        <button className="w-full" onClick={() => setTermsOfService((prev) => !prev)}>
          <Flex className="gap-[15px] mb-[3px]">
            <CheckIconHome checked={termsOfService} />
            <Text variant={"body/16_sb"} className="text-gray-100">
              (필수) 이용약관
            </Text>
          </Flex>
        </button>

        <button className="w-full" onClick={() => setPrivacyConsent((prev) => !prev)}>
          <Flex className="gap-[15px]">
            <CheckIconHome checked={privacyConsent} />
            <Text variant={"body/16_sb"} className="text-gray-100">
              (필수) 개인 정보 수집 / 이용 동의
            </Text>
          </Flex>
        </button>
        <button onClick={handleNotionClick}>
          <Text variant={"caption/12_r"} className="text-gray-300 underline mt-[3px]">
            이용약관 및 개인정보 처리방침
          </Text>
        </button>
      </Stack>

      <FixedBottom className="flex flex-col px-4 gap-[14px] bottom-[25px]">
        {!allChecked && (
          <Text variant="body/13_r" className="text-warning-red text-center">
            필수 약관에 동의해 주세요
          </Text>
        )}
        <Button
          variant={allChecked ? "primary" : "gray"}
          onClick={handleConfirm}
          // 에러 상태일 때 텍스트 색상을 override
          className={allChecked ? "" : "text-gray-400"}
        >
          확인
        </Button>
      </FixedBottom>
    </Stack>
  );
};

const ONBOARDING_ASSETS = {
  MERCURY_LOGIN_LOGO: "/images/logo/mercury_login_logo.webp",
  WORDMARKLOGO_DARKBG: "/images/logo/wordmarklogo_darkbg.webp",
};

const ONBOARDING_LINKS = {
  TERMS_PRIVACY_CONSENT: "https://mercuryplanet.notion.site/use-policy",
};
