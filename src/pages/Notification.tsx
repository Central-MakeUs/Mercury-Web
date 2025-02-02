import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Stack } from "@repo/ui/Stack";
import { NotificationEmpty } from "~/features/notification/NotificationEmpty";

export default function Notification() {
  return (
    <Stack className="w-full h-full">
      <TopNavigation.Root className="w-full" left={<TopNavigation.Back />}>
        <TopNavigation.Title>알림</TopNavigation.Title>
      </TopNavigation.Root>

      <NotificationEmpty />
    </Stack>
  );
}
