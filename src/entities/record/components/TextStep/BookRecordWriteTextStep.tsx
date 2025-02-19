import { AspectRatio } from "@repo/design-system/AspectRatio";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { SendActionButton } from "@repo/design-system/SendActionButton";
import { Text } from "@repo/design-system/Text";
import { TextArea } from "@repo/design-system/TextArea";
import { FormProvider } from "@repo/form";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
import { useEffect } from "react";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import type { Book } from "~/entities/record/model/book.model";

export interface BookRecordWriteTextStepProps {
  book: Book;
  content?: string;
  onNext: (text: string) => void;
}

interface FormState {
  content: string;
}

export default function BookRecordWriteTextStep(
  props: BookRecordWriteTextStepProps & { isLoading?: boolean },
) {
  const { book, content, onNext, isLoading } = props;
  const form = useForm<FormState>({ defaultValues: { content: content } });

  const { setFocus } = form;

  useEffect(() => {
    setFocus("content");
  }, [setFocus]);

  return (
    <FormProvider {...form}>
      <Stack className=" w-full h-full">
        <JustifyBetween className=" px-[16px] w-full h-[104px]">
          <Stack className=" justify-between h-full flex-grow">
            <Text className=" text-gray-800" variant={"title/24_sb"}>
              메모를 남겨볼까요?
            </Text>
            <Text variant={"body/16_m"} className=" text-gray-600 whitespace-pre-wrap">
              {"책을 읽으면서 기억나는 내용이나\n들었던 생각을 적어주세요"}
            </Text>
          </Stack>
          <Box className=" w-[69px] h-[104px]">
            <AspectRatio ratio={69 / 104}>
              <Image
                className=" rounded-[4px]"
                src={book.coverImageUrl}
                alt={book.title}
                objectfit={"fill"}
              />
            </AspectRatio>
          </Box>
        </JustifyBetween>

        <Flex className=" px-[16px] mt-[4px] mb-[10px] min-h-[18px]">
          <WarningText />
        </Flex>

        <FixedBottom className=" max-h-[229px] bg-white-yellow p-4 pb-[37px]">
          <Flex className=" flex-grow min-h-[168px] gap-[11px]">
            <Box className=" w-full">
              <TextArea.Layout>
                <TextArea.Field
                  className=" h-full"
                  resize={false}
                  placeholder="내용을 입력해주세요"
                  required={true}
                  {...form.register("content", { maxLength: 1000 })}
                />
                <TextArea.LetterCountPosition>
                  <LetterCount />
                </TextArea.LetterCountPosition>
              </TextArea.Layout>
            </Box>

            <NextButton onNext={onNext} isLoading={isLoading} />
          </Flex>
        </FixedBottom>
      </Stack>
    </FormProvider>
  );
}

const LIMIT_POLICY = 1000;

const NextButton = (props: { onNext: (text: string) => void; isLoading?: boolean }) => {
  const form = useFormContext<FormState>();
  const content = useWatch({ control: form.control, name: "content" }) ?? "";
  const disabled = content?.length > LIMIT_POLICY || content?.length === 0;

  return (
    <SendActionButton
      data-testid="next-button"
      disabled={disabled}
      loading={props.isLoading}
      onClick={() => {
        props.onNext(content);
      }}
      className="shrink-0 mt-auto"
    />
  );
};

const LetterCount = () => {
  const form = useFormContext<FormState>();
  const content = useWatch({ control: form.control, name: "content" });
  return <TextArea.LetterCount letterCount={content?.length ?? 0} />;
};

const WarningText = () => {
  const form = useFormContext<FormState>();
  const content = useWatch({ control: form.control, name: "content" });

  if (content?.length > LIMIT_POLICY) {
    return (
      <Text variant={"caption/12_m"} className=" text-warning-red">
        1000자까지만 입력할 수 있어요
      </Text>
    );
  }

  return null;
};
