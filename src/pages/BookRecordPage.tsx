import { SafeArea } from "@repo/bridge-web/SafeArea";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Spacing } from "@repo/ui/Spacing";
import { motion } from "motion/react";
import { type ComponentProps, useEffect, useRef, useState } from "react";
import { BookRecordList } from "~/features/bookRecordRead/BookRecordList";
import { BookRecordSearchBar } from "~/features/bookRecordRead/BookRecordSearchBar";
import { BookRecordSortToggleGroup } from "~/features/bookRecordRead/BookRecordSortToggleGroup";
import { GoBookRecordWriteButton } from "~/features/bookRecordRead/GoBookRecordWriteButton";
import { BookRecordProvider } from "~/features/bookRecordRead/model/BookRecordProvider";

export default function BookRecordPage(
  props: Omit<ComponentProps<typeof BookRecordProvider>, "children">,
) {
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setHideSearchBar(true);
      } else {
        setHideSearchBar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BookRecordProvider {...props}>
      <SafeArea edges={["top", "bottom", "left", "right"]} className="  w-full min-h-screen ">
        <motion.div
          initial={{ opacity: 0, translateY: 0 }}
          animate={hideSearchBar ? { opacity: 0, translateY: -50 } : { opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MaxWidthBox className=" pt-[24px] fixed w-full bg-white z-10">
            <JustifyBetween className=" items-end w-full px-[16px]">
              <Text variant={"title/24_sb"} className=" text-gray-800">
                독서기록
              </Text>
              <BookRecordSortToggleGroup />
            </JustifyBetween>
            <Spacing className=" h-[26px]" />
            <Flex className=" px-[16px] z-2 pb-[3px]">
              <BookRecordSearchBar />
            </Flex>
          </MaxWidthBox>
        </motion.div>

        <BookRecordList />

        <GoBookRecordWriteButton />
        <Spacing className="h-[80px]" />
      </SafeArea>
    </BookRecordProvider>
  );
}
