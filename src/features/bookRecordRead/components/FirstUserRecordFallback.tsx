import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";

export const FirstUserRecordFallback = () => {
  return (
    <Stack className=" w-full h-full">
      <CenterStack className="h-full w-full px-[80px]">
        <AspectRatio ratio={213 / 208}>
          <Image src={EMPTY_FALLBACK} alt="list empty fallback image" objectfit={"fill"} />
        </AspectRatio>
        <Spacing className=" h-[45px]" />
        <Text
          variant={"body/18_sb"}
          className=" text-gray-600 text-center whitespace-pre-wrap"
        >{`나의 독서 습관을 만들어줄\n첫 번째 독서기록을 시작해보세요`}</Text>
      </CenterStack>
    </Stack>
  );
};

const EMPTY_FALLBACK = "/images/bookrecord/bookrecord_tab_empty_fallback.webp";
