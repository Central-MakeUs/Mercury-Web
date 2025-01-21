import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";

import { CenterStack } from "@repo/ui/CenterStack";

import { Spacing } from "@repo/ui/Spacing";

export const SearchResultEmptyFallback = () => {
  return (
    <CenterStack className="h-full px-[72px]">
      <AspectRatio ratio={283 / 210}>
        <Image
          src={NO_SEARCH_RESULT_FALLBACK}
          alt="no search result fallback image"
          objectfit={"fill"}
        />
      </AspectRatio>
      <Spacing className=" h-[128px]" />
      <Text
        variant={"body/18_m"}
        className=" text-gray-1000 text-center whitespace-pre-wrap"
      >{`검색 결과가 없어요`}</Text>
    </CenterStack>
  );
};

const NO_SEARCH_RESULT_FALLBACK =
  "/images/bookrecord/bookrecord_tab_no_search_result_fallback.webp";
