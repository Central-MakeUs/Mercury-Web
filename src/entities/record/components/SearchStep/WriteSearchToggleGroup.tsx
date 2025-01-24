import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Flex } from "@repo/ui/Flex";
import { ToggleButton } from "@repo/ui/ToggleButton";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";
import {
  GET_BOOKS_SEARCH_SORT_TYPE,
  isGetBooksSearchSortType,
} from "~/entities/record/api/getBooksSearch";
import { useWriteSearchStore } from "./WriteSearchStep.store";

export const WriteSearchToggleGroup = () => {
  const sortType = useWriteSearchStore((state) => state.sortType);
  const setSortType = useWriteSearchStore((state) => state.actions.setSortType);

  return (
    <Flex className=" justify-between">
      <ToggleButtonGroup
        value={sortType}
        onChange={(value) => isGetBooksSearchSortType(value) && setSortType(value)}
      >
        {Object.values(GET_BOOKS_SEARCH_SORT_TYPE).map((item) => (
          <ToggleButton
            className={cn(
              " flex w-full items-center justify-center ",
              textVariants({ variant: "body/14_m" }),
              item.value === sortType && " text-gray-1000",
              item.value !== sortType && " text-gray-400",
            )}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Flex>
  );
};
