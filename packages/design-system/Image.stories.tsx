import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";
import { Image } from "./Image";
import { MaxWidthBox } from "./MaxWidthBox";

const meta: Meta = {
  title: "ds/Image",
  tags: ["autodocs"],
};
export default meta;

const url = "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80";
const aladinUrl = "https://image.aladin.co.kr/product/35493/7/cover200/k562035555_1.jpg";

export const ObjectCoverAndFillCase: StoryObj = {
  render: () => {
    return (
      <div>
        <MaxWidthBox className=" px-4">
          <AspectRatio ratio={16 / 9}>
            <Image className=" size-full" objectfit={"cover"} alt="test" src={url} />
          </AspectRatio>
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
          <AspectRatio ratio={16 / 9}>
            <Image
              className=" size-full"
              objectfit={"cover"}
              alt="test"
              src={url}
              fallback={
                <MaxWidthBox className=" px-4">
                  <AspectRatio ratio={16 / 9}>
                    <div className=" size-full bg-gray-100">loading</div>
                  </AspectRatio>
                </MaxWidthBox>
              }
            />
          </AspectRatio>
        </MaxWidthBox>
        <div>isLayoutShift</div>
        <AspectRatio ratio={200 / 285}>
          <Image
            className=" size-full"
            objectfit={"cover"}
            alt="test"
            src={aladinUrl}
            fallback={
              <MaxWidthBox className=" px-4">
                <AspectRatio ratio={200 / 285}>
                  <div className=" size-full bg-gray-100">loading</div>
                </AspectRatio>
              </MaxWidthBox>
            }
          />
        </AspectRatio>
      </div>
    );
  },
};
