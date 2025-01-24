import { bridge } from "@repo/bridge-web";
import { SafeArea } from "@repo/bridge-web/SafeArea";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import { useEffect } from "react";
import { useIsScrollTop } from "~/shared/hooks/useIsScrollTop";
import { DropdownMenu } from "../../../packages/design-system/DropDownMenu";

const THRESHOLD_POLICY = 32;
const BAR_DELAY = 10;

interface Props {
  onBack?: () => void;
  onMemoDelete?: () => void;
  onSearchReview?: () => void;
  title?: string;
  className?: string;
}

export const InteractiveBookRecordTopNavigationBar = (props: Props) => {
  const { onBack, onSearchReview, onMemoDelete, title } = props;
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
    <MaxWidthBox className={cn("fixed", props.className)}>
      <SafeArea
        className=" duration-header transition-all"
        style={{ backgroundColor: backgroundColors }}
        edges={["top", "left", "right"]}
      >
        <DropdownMenu.Root>
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
              <DropdownMenu.Content className=" z-[2]">
                <DropdownMenu.Item onClick={onMemoDelete}>전체 삭제하기</DropdownMenu.Item>
                <DropdownMenu.Item onClick={onSearchReview}>리뷰 검색하기</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </TopNavigation.Root>
        </DropdownMenu.Root>
      </SafeArea>
    </MaxWidthBox>
  );
};
