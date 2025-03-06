import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Skeleton } from "@repo/design-system/Skeleton";
import { Text } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { cn } from "@repo/design-system/cn";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { List } from "@repo/ui/List";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "@xionwcfm/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getBooksSearchInfiniteQueryOptions } from "~/entities/record/api/getBooksSearch";
import type { Book } from "~/entities/record/model/book.model";
import { authStore } from "~/entities/user/model/auth.store";
import { BOOKRECORD_ASSETS } from "~/shared/images/bookrecord/bookrecordImages";
import { getBooksExist } from "../../api/getBooksExist";
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
    const [_loadingBookId, setLoadingBookId] = useState<string | null>(null);

    const fallback =
      query.length === 0 ? <FirstFallback isLoading={isLoading} /> : <EmptyFallback />;

    const handleIntersectStart = () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    const navigate = useNavigate();

    const auth = authStore.useAuth();
    const handleBookClick = async (book: Book) => {
      if (auth.isLoggedIn) {
        setLoadingBookId(book.isbn13);
        try {
          const record = await getBooksExist(book.isbn13);
          if (record.isRegistered) {
            toast.main("이미 존재하는 독서기록 입니다.", { duration: 1500 });
            navigate(`/book-record/${record.recordId}`);
          } else {
            onNext(book);
          }
        } catch (error) {
          console.error("기록 조회 중 오류 발생", error);
        } finally {
          setLoadingBookId(null);
        }
      } else {
        onNext(book);
      }
    };

    if (isLoading) {
      return (
        <Stack className=" gap-y-[16px]">
          <Flex className=" gap-x-[12px]">
            <Skeleton className=" rounded-[4px] min-w-[104px] h-[156px] w-[104px]" />
            <Stack className=" w-full">
              <Skeleton className=" mb-[10px] w-full h-[20px]" />
              <Skeleton className=" mb-[4px] w-[50%] h-[20px]" />
              <Skeleton className=" w-[50%] h-[20px]" />
            </Stack>
          </Flex>
          <Flex className=" gap-x-[12px]">
            <Skeleton className=" rounded-[4px] min-w-[104px] h-[156px] w-[104px]" />
            <Stack className=" w-full">
              <Skeleton className=" mb-[10px] w-full h-[20px]" />
              <Skeleton className=" mb-[4px] w-[50%] h-[20px]" />
              <Skeleton className=" w-[50%] h-[20px]" />
            </Stack>
          </Flex>
          <Flex className=" gap-x-[12px]">
            <Skeleton className=" rounded-[4px] min-w-[104px] h-[156px] w-[104px]" />
            <Stack className=" w-full">
              <Skeleton className=" mb-[10px] w-full h-[20px]" />
              <Skeleton className=" mb-[4px] w-[50%] h-[20px]" />
              <Skeleton className=" w-[50%] h-[20px]" />
            </Stack>
          </Flex>
        </Stack>
      );
    }

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
              onClick={() => handleBookClick(book)}
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
