import { Text } from "@repo/design-system/Text";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { SettingMenuItem } from "~/features/settingsMenu/settingsMenuItem";

export default function SettingPage() {
  return (
    <Stack className="w-full h-full">
      <TopNavigation.Root className="w-full" left={<TopNavigation.Back />}>
        <TopNavigation.Title>설정</TopNavigation.Title>
      </TopNavigation.Root>

      <Stack className="px-4 mt-5">
        <SettingMenuItem type="toggle" menuName="알림설정" />
        <SettingMenuItem type="link" menuName="문의하기" />
        <SettingMenuItem type="link" menuName="이용약관 및 개인정보 처리방침" />
        <SettingMenuItem type="link" menuName="공지사항" />
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
