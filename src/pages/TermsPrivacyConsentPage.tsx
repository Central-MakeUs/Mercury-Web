import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Button } from "@repo/design-system/Button";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CheckIconHome } from "@repo/icon/CheckIconHome";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LOGO_ASSETS } from "~/shared/images/logo/logoImages";
import { openExternalUrl } from "~/shared/utils/openExternalUrl";

export default function TermsPrivacyConsentPage() {
  const navigate = useNavigate();
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
      navigate("/book-record");
    }
  };

  return (
    <CenterStack className=" min-h-screen w-full bg-navy h-full gap-y-[50px]">
      <CenterStack className=" w-full px-4">
        <Stack className=" w-full">
          <AspectRatio ratio={343 / 219}>
            <Image
              src={LOGO_ASSETS.MERCURY_LOGIN_LOGO_WEBP}
              alt="mercury logo"
              objectfit={"fill"}
            />
          </AspectRatio>
        </Stack>
        <Stack className=" mt-[30px] pl-[66px] pr-[54px] w-full">
          <AspectRatio ratio={255 / 52}>
            <Image
              src={LOGO_ASSETS.WORDMARKLOGO_DARKBG_WEBP}
              alt="wordmark logo"
              objectfit={"fill"}
            />
          </AspectRatio>
        </Stack>
      </CenterStack>

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
            className={allChecked ? "" : "text-gray-400"}
          >
            확인
          </Button>
        </FixedBottom>
      </Stack>
    </CenterStack>
  );
}
const ONBOARDING_LINKS = {
  TERMS_PRIVACY_CONSENT: "https://mercuryplanet.notion.site/use-policy",
};
