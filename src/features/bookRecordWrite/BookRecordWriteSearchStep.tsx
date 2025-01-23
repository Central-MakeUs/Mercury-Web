import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Button } from "@repo/design-system/Button";
import { Image } from "@repo/design-system/Image";
import { SearchBar } from "@repo/design-system/SearchBar";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { List } from "@repo/ui/List";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";

export interface BookRecordWriteSearchStepProps {
  onNext: (book: unknown) => void;
}

export default function BookRecordWriteSearchStep(props: BookRecordWriteSearchStepProps) {
  const { onNext } = props;

  return (
    <Stack className=" h-full">
      <Flex className=" px-[16px] mb-[14px]">
        <SearchBar left={<MagnifyIcon />} placeholder="책 제목을 검색해주세요" />
      </Flex>
      <Stack className=" h-full">
        <List
          fallback={
            <CenterStack className=" h-full  px-[96px]">
              <AspectRatio>
                <Image src={SEARCH_ASSETS.EMPTY_FALLBACK} alt="검색 결과 없음" />
              </AspectRatio>
            </CenterStack>
          }
        ></List>
      </Stack>
      <Flex className=" justify-center px-16 mb-4 w-full">
        <Button
          onClick={() => {
            onNext(undefined);
          }}
          className=" w-full"
        >
          임시 다음 버튼
        </Button>
      </Flex>
    </Stack>
  );
}

const _SearchResult = wrap
  .Suspense()
  .ErrorBoundary({ fallback: null })
  .on((props: { query: string }) => {
    const { query } = props;

    return <List></List>;
  });

const SEARCH_ASSETS = {
  EMPTY_FALLBACK: "/images/bookrecord/bookrecord_search_empty_fallback.webp",
};
