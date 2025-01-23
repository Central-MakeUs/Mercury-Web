import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";

export default function HomePage() {
  return (
    <Stack className="  w-full">
      <JustifyBetween className=" pb-[30px] pt-[24px] bg-white w-full px-[16px]">
        <Flex className=" w-[161px] h-[32px]">
          <AspectRatio ratio={161 / 32}>
            <Image src={HOME_ASSETS.HOME_LOGO} alt="home_logo" objectfit={"fill"} />
          </AspectRatio>
        </Flex>
        <NotificationBadge.Button>
          <NotificationBadge.Icon />
        </NotificationBadge.Button>
      </JustifyBetween>
    </Stack>
  );
}

const HOME_ASSETS = {
  HOME_LOGO: "/images/home/home_logo.webp",
  HOME_MERCURY: "/images/home/home_mercury.webp",
};
