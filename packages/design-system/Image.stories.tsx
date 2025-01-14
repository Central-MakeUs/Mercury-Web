import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";
import { MaxWidthBox } from "./MaxWidthBox";

const meta: Meta = {
  title: "ds/Image",
  tags: ["autodocs"],
};
export default meta;

const url = "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80";

export const ObjectCoverAndFillCase: StoryObj = {
  render: () => {
    return (
      <div>
        <MaxWidthBox className=" px-4">
          <Image className=" size-full" ratio={16 / 9} objectFit={"cover"} alt="test" src={url} />
        </MaxWidthBox>
      </div>
    );
  },
};

export const LoadingFallback: StoryObj = {
  render: () => {
    return (
      <div>
        <MaxWidthBox className=" px-4">
          <Image
            className=" size-full"
            ratio={16 / 9}
            objectFit={"cover"}
            alt="test"
            src={url}
            fallback={
              <MaxWidthBox className=" px-4">
                <AspectRatio.Root ratio={16 / 9}>
                  <div className=" size-full bg-gray-100">loading</div>
                </AspectRatio.Root>
              </MaxWidthBox>
            }
          />
        </MaxWidthBox>
        <div>isLayoutShift</div>
      </div>
    );
  },
};
