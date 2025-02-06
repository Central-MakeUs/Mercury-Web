import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { ToggleButton } from "@repo/ui/ToggleButton";

export const OnOffToggleButton = (props: {
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}) => {
  const { onClick, className, selected } = props;
  return (
    <ToggleButton
      onClick={onClick}
      className={cn(
        textVariants({ variant: "body/16_sb" }),
        " text-gray-500 data-[state=selected]:text-green ",
        className,
      )}
      selected={selected}
    >
      {selected ? "ON" : "OFF"}
    </ToggleButton>
  );
};
