import { CtaButton } from "@repo/design-system/CtaButton";
import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Image } from "@repo/design-system/Image";
import { ImageFadeAnimator } from "@repo/design-system/ImageFadeAnimator";
import { SingleSlider } from "@repo/design-system/SingleSlider";
import { Text } from "@repo/design-system/Text";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useDraft, useLoading } from "@xionwcfm/react";
import { memo } from "react";

export interface BookRecordWriteProgressStepProps {
  gauge?: number;
  onNext: (gauge: number) => Promise<void>;
}

export default function BookRecordWriteProgressStep(props: BookRecordWriteProgressStepProps) {
  const [value, setValue] = useDraft(props.gauge ?? 0);
  const [loading, startLoading] = useLoading();

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

        <ImageSection status={getStatus(value)} />
      </Stack>

      <Stack className=" px-4">
        <Text variant={"body/14_m"} className=" text-pastel-violet">
          시작이 반이에요! 화이팅!!
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
            loading={loading}
            onClick={() => {
              startLoading(props.onNext(value));
            }}
          >
            다음
          </CtaButton>
        </FixedBottom>
      </Stack>
    </Stack>
  );
}

const ImageSection = memo((props: { status: "0" | "50" | "100" }) => {
  return (
    <ImageFadeAnimator
      value={props.status}
      className=" mt-[64px] px-[100px]"
      caseBy={{
        "0": (
          <ImageFadeAnimator.FadeIn
            key={"0"}
            transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
          >
            <Image src={GAUGE_ASSETS[0]} alt="read gauge 0 image" objectfit={"contain"} />
          </ImageFadeAnimator.FadeIn>
        ),
        "50": (
          <ImageFadeAnimator.FadeIn
            key={"50"}
            transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
          >
            <Image src={GAUGE_ASSETS[50]} alt="read gauge 50 image" objectfit={"contain"} />
          </ImageFadeAnimator.FadeIn>
        ),
        "100": (
          <ImageFadeAnimator.FadeIn
            key={"100"}
            transition={{ duration: GAUGE_DURATION_POLICY, ease: GAUGE_EASE_POLICY }}
          >
            <Image src={GAUGE_ASSETS[100]} alt="read gauge 100 image" objectfit={"contain"} />
          </ImageFadeAnimator.FadeIn>
        ),
      }}
    />
  );
});

const GAUGE_DURATION_POLICY = 0.3; // 300ms duration
const GAUGE_EASE_POLICY = "easeOut" as const;
const GAUGE_ASSETS = {
  "0": "/images/gauge/gauge_0.webp",
  "50": "/images/gauge/gauge_50.webp",
  "100": "/images/gauge/gauge_100.webp",
};

const getStatus = (value: number) => {
  if (value === 100) {
    return "100" as const;
  }
  if (value > 49) {
    return "50" as const;
  }
  return "0" as const;
};
