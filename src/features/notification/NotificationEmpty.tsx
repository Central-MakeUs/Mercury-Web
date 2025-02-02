import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";

export const NotificationEmpty = () => {
  return (
    <Stack className=" w-full h-full mt-[100px]">
      <CenterStack className="h-full w-full px-[116px]">
        <AspectRatio>
          <Image src={EMPTY_FALLBACK} alt="list empty fallback image" objectfit={"fill"} />
        </AspectRatio>
        <Spacing className=" h-[39px]" />
      </CenterStack>
      <Text variant={"body/18_sb"} className=" text-gray-600 text-center">
        받은 알림이 없어요
      </Text>
    </Stack>
  );
};

const EMPTY_FALLBACK = "/images/notification/notification_empty.webp";
