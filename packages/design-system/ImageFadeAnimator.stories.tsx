import { Box } from "@repo/ui/Box";
import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";
import { Image } from "./Image";
import { ImageFadeAnimator } from "./ImageFadeAnimator";

const meta: Meta = {
  title: "ds/ImageFadeAnimator",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState<"0" | "50" | "100">("0");
    return (
      <Box className=" w-full">
        <Box className=" ">
          <ImageFadeAnimator
            value={value}
            caseBy={{
              "0": (
                <ImageFadeAnimator.FadeIn key="0" transition={{ duration: 0.5 }}>
                  <Image src="/images/gauge/gauge_0.webp" alt="test" objectfit={"contain"} />
                </ImageFadeAnimator.FadeIn>
              ),
              "50": (
                <ImageFadeAnimator.FadeIn key="50" transition={{ duration: 0.5 }}>
                  <Image src="/images/gauge/gauge_50.webp" alt="test" objectfit={"contain"} />
                </ImageFadeAnimator.FadeIn>
              ),
              "100": (
                <ImageFadeAnimator.FadeIn key="100" transition={{ duration: 0.5 }}>
                  <Image src="/images/gauge/gauge_100.webp" alt="test" objectfit={"contain"} />
                </ImageFadeAnimator.FadeIn>
              ),
            }}
          />
        </Box>

        <Stack className="  mt-12 gap-y-4">
          <Button onClick={() => setValue("0")}>set0</Button>
          <Button onClick={() => setValue("50")}>set50</Button>
          <Button onClick={() => setValue("100")}>set100</Button>
        </Stack>
      </Box>
    );
  },
};
