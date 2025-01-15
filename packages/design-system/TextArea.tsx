import { type Control, useWatch } from "react-hook-form";
import { Text } from "./Text";
import { cn } from "./cn";

export const LetterCount = (props: {
  control: Control<{
    text: string;
  }>;
  name: "text";
}) => {
  const watch = useWatch({ control: props.control, name: props.name }) || "";
  return (
    <Text
      variant="body/14_m"
      className={cn(
        "absolute bottom-[29px] right-[30px] text-gray-300",
        watch.length > 0 && "text-gray-500",
      )}
    >
      {watch.length}
    </Text>
  );
};
