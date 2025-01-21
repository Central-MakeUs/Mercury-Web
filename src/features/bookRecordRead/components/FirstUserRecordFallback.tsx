import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";

import { CenterStack } from "@repo/ui/CenterStack";

import { Spacing } from "@repo/ui/Spacing";

export const FirstUserRecordFallback = () => {
  return (
    <CenterStack className="h-full px-[72px]">
      <AspectRatio ratio={283 / 210}>
        <Image src={EMPTY_FALLBACK} alt="list empty fallback image" objectfit={"fill"} />
      </AspectRatio>
      <Spacing className=" h-[128px]" />
      <Text
        variant={"body/18_m"}
        className=" text-gray-1000 text-center whitespace-pre-wrap"
      >{`나의 독서 습관을 만들어줄\n첫 번째 독서기록을 시작해보세요`}</Text>
    </CenterStack>
  );
};

const EMPTY_FALLBACK = "/images/bookrecord/bookrecord_tab_empty_fallback.webp";
