import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { CtaButton } from "./CtaButton";
import { IosTimePicker } from "./IosTimePicker";
import { Text } from "./Text";

const meta: Meta = {
  title: "ds/BottomSheet",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <BottomSheet.Root handleOnly={true}>
        <BottomSheet.Trigger>hello</BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content className=" flex  items-center flex-col pt-[16px] px-[20px] rounded-t-[20px] h-[360px] bg-gray-white">
            <BottomSheet.Handle className=" mb-[16px]" />
            <BottomSheet.Description className=" sr-only">
              타이머의 시간을 설정합니다.
            </BottomSheet.Description>
            <BottomSheet.Title asChild={true}>
              <Text variant={"title/20_sb"} className=" text-gray-600">
                시간 설정하기
              </Text>
            </BottomSheet.Title>
            <Stack className=" mt-[14px] mb-[20px] h-[160px] w-full">
              <IosTimePicker.Layout>
                <IosTimePicker slideCount={60} perspective="left" label="min" />
                <IosTimePicker slideCount={60} perspective="right" label="sec" />
              </IosTimePicker.Layout>
            </Stack>
            <CtaButton>다음</CtaButton>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet.Root>
    );
  },
};
