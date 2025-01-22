import { Image } from "@repo/design-system/Image";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { InteractiveBookRecordTopNavigationBar } from "../bookRecordDetail/InteractiveBookRecordTopNavigationBar";
import { RecordedBookMemo } from "./components/RecordedBookMemo";

export interface Memo {
  memoId: number;
  content: string;
  updatedAt: string;
}

interface BookRecordMemoListProps {
  writer: string;
  publish: string;
  title: string;
  progress: number;
  cheeringMessage: string;
  memos: Memo[];
}

export const BookRecordMemoList = ({
  writer,
  publish,
  title,
  progress,
  cheeringMessage,
  memos,
}: BookRecordMemoListProps) => {
  const aladinUrl = "https://image.aladin.co.kr/product/35493/7/cover200/k562035555_1.jpg";
  return (
    <Stack>
      <Stack className="max-h-[287px]">
        <InteractiveBookRecordTopNavigationBar />

        <MaxWidthBox className=" w-screen h-screen relative">
          <Image
            src={aladinUrl}
            alt="aladin"
            className=" w-full max-h-[287px]"
            objectfit={"cover"}
          />

          <Stack className="bg-gray-1000 bg-opacity-70 px-4 absolute bottom-0 left-0 pt-[138px] pb-[15px]">
            <Flex className="gap-[5px]">
              <Text className="text-gray-300" variant={"body/15_m"}>
                저자
              </Text>
              <Text className="text-gray-200" variant={"body/15_m"}>
                {writer}
              </Text>
            </Flex>

            <Flex className="gap-[5px] mt-1 mb-[10px]">
              <Text className="text-gray-300" variant={"body/15_m"}>
                출판사
              </Text>
              <Text className="text-gray-200" variant={"body/15_m"}>
                {publish}
              </Text>
            </Flex>

            <Text className="text-white" variant={"title/25_b"}>
              {title}
            </Text>
          </Stack>
        </MaxWidthBox>

        <Stack className=" h-screen "></Stack>
      </Stack>

      <Stack className="px-4 py-[17px]">
        <Flex className="justify-between">
          <Text className="text-gray-600" variant={"body/16_sb"}>
            {progress}%까지 읽었어요!
          </Text>
          <Text className="text-pastel-violet" variant={"body/16_m"}>
            {cheeringMessage}
          </Text>
        </Flex>

        <Stack className="mt-[14px] gap-[17px]">
          {memos.map(({ memoId, content, updatedAt }) => (
            <RecordedBookMemo
              key={memoId}
              updateAt={updatedAt}
              contents={content}
              memoId={memoId}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
