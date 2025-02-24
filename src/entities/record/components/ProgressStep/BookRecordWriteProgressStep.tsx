import { CtaButton } from "@repo/design-system/CtaButton";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { ImageFadeAnimator } from "@repo/design-system/ImageFadeAnimator";
import { SingleSlider } from "@repo/design-system/SingleSlider";
import { Text } from "@repo/design-system/Text";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useDraft } from "@xionwcfm/react";
import { memo } from "react";
import { getGaugeMessage } from "~/entities/record/model/record.constants";
import { GAUGE_ASSETS } from "~/shared/images/gauge/gaugeImages";

export interface BookRecordWriteProgressStepProps {
  gauge?: number;
  onNext: (gauge: number) => void;
  loading?: boolean;
}

export default function BookRecordWriteProgressStep(props: BookRecordWriteProgressStepProps) {
  const [value, setValue] = useDraft(props.gauge ?? 0);

  return (
    <Stack className=" h-full justify-between pb-[24px]">
      <Stack>
        <Spacing className=" h-6" />
        <Stack className=" px-5">
          <Text variant={"title/24_sb"} className=" text-gray-800">
            얼마나 읽으셨어요?
          </Text>
          <Spacing className=" h-3" />
          <Text variant={"body/16_m"} className=" text-gray-600">
            책의 진도를 게이지로 나타낼 수 있어요
          </Text>
        </Stack>

        <ImageSection status={getStatus(value)} value={value} />
      </Stack>

      <Stack className=" px-4">
        <Text variant={"body/14_m"} className=" text-pastel-violet">
          {getGaugeMessage(value)}
        </Text>
        <SingleSlider
          className="my-4"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={setValue}
        />
        <Text variant={"body/15_sb"} className=" mb-[62px] text-gray-600 text-center">
          {value}%까지 읽었어요
        </Text>
        <Spacing className=" h-[80px]" />
        <FixedBottom className=" px-[24px] pb-[24px]">
          <CtaButton
            loading={props.loading}
            onClick={() => {
              props.onNext(value);
            }}
          >
            다음
          </CtaButton>
        </FixedBottom>
      </Stack>
    </Stack>
  );
}

const ImageSection = memo((props: { status: "0" | "50" | "100"; value: number }) => {
  return (
    <Stack className=" min-h-[400px] w-full justify-center items-center">
      <ImageFadeAnimator
        value={props.status}
        className=" px-[115px] relative "
        caseBy={{
          "0": (
            <ImageFadeAnimator.FadeIn
              key={"0"}
              transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
            >
              <Image
                src={GAUGE_ASSETS.GAUGE0_WEBP}
                alt="read gauge 0 image"
                className=" w-full"
                objectfit={"contain"}
              />
              <Text className="text-dark-violet/70 text-[32px] font-bold absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                {props.value}%
              </Text>
            </ImageFadeAnimator.FadeIn>
          ),
          "50": (
            <ImageFadeAnimator.FadeIn
              key={"50"}
              transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
            >
              <Image
                src={GAUGE_ASSETS.GAUGE50_WEBP}
                alt="read gauge 50 image"
                className=" w-full"
                objectfit={"contain"}
              />
              <Text className="text-white-yellow text-[32px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {props.value}%
              </Text>
            </ImageFadeAnimator.FadeIn>
          ),
          "100": (
            <ImageFadeAnimator.FadeIn
              key={"100"}
              transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
            >
              <Image
                src={GAUGE_ASSETS.GAUGE100_WEBP}
                alt="read gauge 100 image"
                className=" w-full"
                objectfit={"contain"}
              />
              <Text className="text-white-violet text-[32px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {props.value}%
              </Text>
            </ImageFadeAnimator.FadeIn>
          ),
        }}
      />
    </Stack>
  );
});

const GAUGE_DURATION_POLICY = 0.3; // 300ms duration
const GAUGE_EASE_POLICY = "easeOut" as const;

const getStatus = (value: number) => {
  if (value >= 70) {
    return "100" as const;
  }
  if (value >= 35) {
    return "50" as const;
  }
  return "0" as const;
};
