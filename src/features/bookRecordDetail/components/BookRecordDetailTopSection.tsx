import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";

import { InteractiveBookRecordTopNavigationBar } from "~/features/bookRecordDetail/InteractiveBookRecordTopNavigationBar";

import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";

import { useNavigate } from "react-router";
import { createNaverReviewUrl } from "~/shared/utils/createNaverReviewUrl";
import { openExternalUrl } from "~/shared/utils/openExternalUrl";

export const TopSection = (props: {
  title: string;
  author: string;
  publisher: string;
  src: string;
}) => {
  const { title, author, publisher, src } = props;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearch = () => {
    openExternalUrl(createNaverReviewUrl(title));
  };

  return (
    <Stack className="w-full h-full relative">
      <InteractiveBookRecordTopNavigationBar
        className=" z-[4]"
        title={title}
        onBack={handleBackClick}
        onSearchReview={handleSearch}
      />
      <AspectRatio ratio={375 / 287} className=" w-full">
        <Image src={src} alt={title} className=" w-full" objectfit={"fill"} />
      </AspectRatio>

      <MaxWidthBox className=" z-[1] bg-[rgba(0,0,0,0.7)] top-0 left-0 absolute w-full  h-full">
        <AspectRatio ratio={375 / 287} className=" w-full">
          <Stack className=" px-[16px] mb-[10px] gap-y-[4px] pb-[16px] justify-end text-white w-full h-full">
            <Flex className=" gap-x-[4px]">
              <Text variant={"body/15_m"} className=" text-nowrap text-gray-300">
                저자
              </Text>
              <Text variant={"body/15_m"} className=" line-clamp-1 text-gray-200">
                {author}
              </Text>
            </Flex>
            <Flex className=" gap-x-[4px]">
              <Text variant={"body/15_m"} className=" text-nowrap text-gray-300">
                출판사
              </Text>
              <Text variant={"body/15_m"} className=" line-clamp-1 text-gray-200">
                {publisher}
              </Text>
            </Flex>
            <Text as="h2" variant={"title/25_b"} className=" text-white line-clamp-2">
              {title}
            </Text>
          </Stack>
        </AspectRatio>
      </MaxWidthBox>
    </Stack>
  );
};
