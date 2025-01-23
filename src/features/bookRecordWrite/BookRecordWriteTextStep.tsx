import { AspectRatio } from "@repo/design-system/AspectRatio";
import { CtaButton } from "@repo/design-system/CtaButton";
import { Text } from "@repo/design-system/Text";
import { TextArea } from "@repo/design-system/TextArea";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
import type { PropsWithChildren } from "react";

export interface BookRecordWriteTextStepProps {
  text?: string;
  onNext: (text: string) => void;
}

export default function BookRecordWriteTextStep(props: BookRecordWriteTextStepProps) {
  const { text, onNext } = props;

  return (
    <Stack className=" w-full h-full">
      <JustifyBetween className=" px-[16px] w-full h-[104px]">
        <Stack className=" justify-between h-full flex-grow">
          <Text className=" text-gray-800" variant={"title/24_sb"}>
            내용을 기록해볼까요?
          </Text>
          <Text variant={"body/16_m"} className=" text-gray-600 whitespace-pre-wrap">
            {"책을 읽으면서 기억나는 내용이나\n들었던 생각을 적어주세요"}
          </Text>
        </Stack>
        <Box className=" w-[69px] h-[104px]">
          <AspectRatio ratio={69 / 104}>
            <Box className=" bg-gray-100 rounded-[10px] w-full h-full" />
          </AspectRatio>
        </Box>
      </JustifyBetween>

      <Flex className=" px-[16px] mt-[4px] mb-[10px] min-h-[18px]">
        <Text variant={"caption/12_m"} className=" text-warning-red">
          1000자까지만 입력할 수 있어요
        </Text>
      </Flex>

      <Stack className=" flex-grow h-full bg-white-yellow">
        <Box className=" w-full px-[16px] mt-[20px] h-full mb-[16px]">
          <TextArea.Layout>
            <TextArea.Field
              className=" h-full"
              resize={false}
              placeholder="내용을 입력해주세요"
              required={true}
            />
            <TextArea.LetterCountPosition>
              <TextArea.LetterCount letterCount={0} />
            </TextArea.LetterCountPosition>
          </TextArea.Layout>
        </Box>
        <Flex className=" px-[16px] mb-[24px]">
          <CtaButton onClick={() => onNext("hello")}>다 적었어요</CtaButton>
        </Flex>
      </Stack>
    </Stack>
  );
}

const _Provider = (props: PropsWithChildren) => {
  const { children } = props;
  return;
};
