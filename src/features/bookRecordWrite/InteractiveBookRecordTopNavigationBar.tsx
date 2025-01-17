import { bridge } from "@repo/bridge-web";
import { SafeArea } from "@repo/bridge-web/SafeArea";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { vars } from "@repo/token";
import { useEffect } from "react";
import { useIsScrollTop } from "~/shared/hooks/useIsScrollTop";

const THRESHOLD_POLICY = 32;
const BAR_DELAY = 10;

interface Props {
  onBack?: () => void;
  onMemoDelete?: () => void;
}

export const InteractiveBookRecordTopNavigationBar = (props: Props) => {
  const { onBack } = props;
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

  return (
    <MaxWidthBox className="fixed">
      <SafeArea
        className=" duration-header transition-all"
        style={{ backgroundColor: backgroundColors }}
        edges={["top", "left", "right"]}
      >
        <TopNavigation.Root
          className=" py-[3px]"
          left={<TopNavigation.Back onClick={onBack} color={backColors} />}
          right={<TopNavigation.Kebab color={kebabColors} />}
        >
          <TopNavigation.Title style={{ color: textColors }}>
            알라딘 {isScrollTop ? "top" : "bottom"}
          </TopNavigation.Title>
        </TopNavigation.Root>
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
