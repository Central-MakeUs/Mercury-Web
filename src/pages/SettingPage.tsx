import { Text } from "@repo/design-system/Text";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useNavigate } from "react-router";
import { SettingMenuItem } from "~/features/settingsMenu/SettingsMenuItem";

export default function SettingPage() {
  const _navigate = useNavigate();

  return (
    <Stack className="w-full h-full">
      <TopNavigation.Root className="w-full" left={<TopNavigation.Back />}>
        <TopNavigation.Title>설정</TopNavigation.Title>
      </TopNavigation.Root>

      <Stack className="px-4 mt-5">
        <SettingMenuItem type="toggle" menuName="알림설정" />
        <SettingMenuItem type="link" menuName="문의하기" link={SETTINGS_LINKS.FQA} />
        <SettingMenuItem
          type="link"
          menuName="이용약관 및 개인정보 처리방침"
          link={SETTINGS_LINKS.TERMSANDPRIVACY}
        />
        <SettingMenuItem type="link" menuName="공지사항" link={SETTINGS_LINKS.NOTICE} />
        <SettingMenuItem type="exit" menuName="로그아웃" />
        <SettingMenuItem type="exit" menuName="탈퇴하기" />

        <Spacing className="h-[130px]" />

        <Text variant={"body/14_m"} className="text-gray-600">
          궁금한 점이 있으신가요?
        </Text>
        <Text variant={"body/13_r"} className="text-gray-500">
          이메일(mercurynoticing@gmail.com)로 문의해주세요.
        </Text>
      </Stack>
    </Stack>
  );
}

const SETTINGS_LINKS = {
  FQA: "https://burly-jar-165.notion.site/18828ba3580d80f8b23ef2a7082f8412?pvs=4",
  TERMSANDPRIVACY: "https://burly-jar-165.notion.site/use-policy?pvs=4",
  NOTICE: "https://burly-jar-165.notion.site/announcement?pvs=4",
};
