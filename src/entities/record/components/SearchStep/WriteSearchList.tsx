import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { CenterStack } from "@repo/ui/CenterStack";
import { List } from "@repo/ui/List";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "@xionwcfm/react";
import { getBooksSearchInfiniteQueryOptions } from "~/entities/record/api/getBooksSearch";
import type { Book } from "~/entities/record/model/book.model";
import { BOOKRECORD_ASSETS } from "~/shared/images/bookrecord/bookrecordImages";
import { SearchBookItem } from "./WriteSearchBookItem";
import { useWriteSearchStore } from "./WriteSearchStep.store";

export const WriteSearchList = wrap.Suspense().on(
  (props: {
    onNext: (book: Book) => void;
  }) => {
    const { onNext } = props;
    const query = useWriteSearchStore((state) => state.query);
    const sortType = useWriteSearchStore((state) => state.sortType);
    const maxResults = useWriteSearchStore((state) => state.maxResults);
    const startPage = useWriteSearchStore((state) => state.startPage);

    const param = { query, sortType, maxResults, startPage };
    const queryOptions = getBooksSearchInfiniteQueryOptions(param);
    const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery(queryOptions);
    const books = data?.pages.flatMap((page) => page.books) ?? [];

    const isObserverDisplay = hasNextPage && query.length > 0;

    const fallback =
      query.length === 0 || isLoading ? <FirstFallback isLoading={isLoading} /> : <EmptyFallback />;

    const handleIntersectStart = () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    return (
      <>
        <List className=" w-full gap-y-[24px]" fallback={fallback}>
          {books.map((book, index) => (
            <SearchBookItem
              // 책이 중복으로 오는 케이스가 존재해서 키값으로 isbn값과 같은 것을 사용할 경우 react error가 발생합니다.
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              authorName={book.author}
              publishName={book.publisher}
              imageUrl={book.coverImageUrl}
              title={book.title}
              onClick={() => onNext(book)}
            />
          ))}
        </List>
        {isObserverDisplay && (
          <InView onIntersectStart={handleIntersectStart}>
            <div />
          </InView>
        )}
      </>
    );
  },
);

const FirstFallback = (props: { isLoading?: boolean }) => {
  const { isLoading } = props;
  return (
    <Stack className="h-full  w-full">
      <CenterStack
        className={cn(
          " h-full  w-full pl-[116px] pr-[96px]",
          isLoading && " opacity-30 animate-pulse",
        )}
      >
        <AspectRatio>
          <Image
            src={BOOKRECORD_ASSETS.BOOKRECORD_SEARCH_EMPTY_FALLBACK_WEBP}
            alt="검색 결과 없음"
          />
        </AspectRatio>
      </CenterStack>
      <Text
        className=" mt-[40px] text-gray-600 whitespace-pre-wrap text-center"
        variant={"body/18_sb"}
      >
        {"독서기록을 남기기 위한\n책 검색부터 시작해 볼게요"}
      </Text>
    </Stack>
  );
};

const EmptyFallback = () => {
  return (
    <Stack className=" h-full w-full justify-center items-center ">
      <CenterStack className=" w-full pl-[117px] pr-[96px]">
        <AspectRatio>
          <Image
            src={BOOKRECORD_ASSETS.BOOKRECORD_TAB_NO_SEARCH_RESULT_FALLBACK_WEBP}
            alt="검색 결과 없음"
          />
        </AspectRatio>
      </CenterStack>
      <Text className=" mt-[40px] text-gray-600" variant={"body/18_sb"}>
        검색 결과가 없어요
      </Text>
    </Stack>
  );
};
