import { AspectRatio } from "@repo/design-system/AspectRatio";
import { CtaButton } from "@repo/design-system/CtaButton";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { TextArea } from "@repo/design-system/TextArea";
import { FormProvider } from "@repo/form";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
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

  return (
    <FormProvider {...form}>
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

        <FixedBottom>
          <Flex className=" flex-grow h-full bg-white-yellow">
            <Box className=" w-full px-[16px] mt-[20px] h-full mb-[16px]">
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
            <Cta onNext={onNext} isLoading={isLoading} />
          </Flex>
        </FixedBottom>
      </Stack>
    </FormProvider>
  );
}

const LIMIT_POLICY = 1000;

const Cta = (props: { onNext: (text: string) => void; isLoading?: boolean }) => {
  const form = useFormContext<FormState>();
  const content = useWatch({ control: form.control, name: "content" });
  const disabled = content?.length > LIMIT_POLICY;

  return (
    <>
      <Flex className=" px-[16px] mb-[24px]">
        <div className=" h-[54px]" />
      </Flex>
      <FixedBottom className=" px-[24px] pb-[24px]">
        <CtaButton
          loading={props.isLoading}
          disabled={disabled}
          onClick={() => {
            props.onNext(content);
          }}
        >
          다 적었어요
        </CtaButton>
      </FixedBottom>
    </>
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
