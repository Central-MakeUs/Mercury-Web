import { SafeArea } from "@repo/bridge-web/SafeArea";
import { Text } from "@repo/design-system/Text";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Stack } from "@repo/ui/Stack";
import { useNavigate } from "react-router";
import { SettingMenuList } from "~/features/settingsMenu/components/SettingMenuList";

export default function SettingPage() {
  const navigate = useNavigate();

  return (
    <SafeArea
      edges={["top", "bottom", "left", "right"]}
      className=" flex flex-col w-full min-h-dvh"
    >
      <TopNavigation.Root
        className="w-full"
        left={<TopNavigation.Back onClick={() => navigate("/home", { replace: true })} />}
      >
        <TopNavigation.Title>설정</TopNavigation.Title>
      </TopNavigation.Root>

      <Stack className=" h-full justify-between">
        <SettingMenuList />

        <Stack className="px-4 mt-5 mb-[100px]">
          <Text variant={"body/14_m"} className="text-gray-600">
            궁금한 점이 있으신가요?
          </Text>
          <Text variant={"body/13_r"} className="text-gray-500">
            이메일(mercurynoticing@gmail.com)로 문의해주세요.
          </Text>
        </Stack>
      </Stack>
    </SafeArea>
  );
}
