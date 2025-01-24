import { bridge } from "@repo/bridge-web";
import { SafeArea } from "@repo/bridge-web/SafeArea";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { vars } from "@repo/token";
import { useEffect, useState } from "react";
import { useIsScrollTop } from "~/shared/hooks/useIsScrollTop";
import { DropdownMenu } from "./components/DropDownMenu";

const THRESHOLD_POLICY = 32;
const BAR_DELAY = 10;

interface Props {
  onBack?: () => void;
  onMemoDelete?: () => void;
  title?: string;
}

export const InteractiveBookRecordTopNavigationBar = (props: Props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { onBack, onMemoDelete } = props;
  const isScrollTop = useIsScrollTop({ threshold: THRESHOLD_POLICY, delay: BAR_DELAY });
  const textColors = isScrollTop ? vars.colors.white : vars.colors.gray[500];
  const backgroundColors = isScrollTop ? undefined : vars.colors.white;
  const kebabColors = isScrollTop ? vars.colors.white : vars.colors.gray[400];
  const backColors = isScrollTop ? vars.colors.white : vars.colors.gray[500];

  useEffect(() => {
    if (isScrollTop) {
      bridge?.notifyStatusBar?.("light");
    } else {
      bridge?.notifyStatusBar?.("dark");
    }
  }, [isScrollTop]);

  const handleOpenSearchBook = () => {
    if (!props.title) {
      alert("책 제목이 없습니다.");
      return;
    }

    const url = `https://section.blog.naver.com/Search/Post.naver?pageNo=1&rangeType=ALL&orderBy=sim&keyword=${encodeURIComponent(props.title)}`;
    window.open(url, "_blank");
  };

  return (
    <MaxWidthBox className="fixed z-[2]">
      <SafeArea
        className=" duration-header transition-all"
        style={{ backgroundColor: backgroundColors }}
        edges={["top", "left", "right"]}
      >
        <DropdownMenu.Root open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
          <TopNavigation.Root
            className=" py-[3px]"
            left={<TopNavigation.Back onClick={onBack} color={backColors} />}
            right={
              <DropdownMenu.Trigger asChild={true}>
                <TopNavigation.Kebab color={kebabColors} className="right-[16px]" />
              </DropdownMenu.Trigger>
            }
          >
            <TopNavigation.Title style={{ color: textColors }}>독서기록</TopNavigation.Title>
            <DropdownMenu.Portal>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={onMemoDelete}>전체 삭제하기</DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleOpenSearchBook}>리뷰 검색하기</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </TopNavigation.Root>
        </DropdownMenu.Root>
      </SafeArea>
    </MaxWidthBox>
  );
};

// example code
// import { Image } from "@repo/design-system/Image";
// import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
// import { Stack } from "@repo/ui/Stack";
// import { InteractiveBookRecordTopNavigationBar } from "~/features/bookRecordWrite/InteractiveBookRecordTopNavigationBar";
// const aladinUrl = "https://image.aladin.co.kr/product/35493/7/cover200/k562035555_1.jpg";

// export default function OnBoardingPage() {
//   return (
//     <Stack>
//       <InteractiveBookRecordTopNavigationBar />

//       <MaxWidthBox className=" w-screen">
//         <Image src={aladinUrl} alt="aladin" className=" w-full" objectfit={"fill"} />
//       </MaxWidthBox>

//       <Stack className=" h-screen "></Stack>
//     </Stack>
//   );
// }
