import { type Ref, forwardRef } from "react";
import { Image } from "./Image";
import { Text } from "./Text";

interface BookListProps {
  imageUrl: string;
  title: string;
  content: React.ReactNode;
  onClick?: () => void;
}

export const BookList = forwardRef(function BookList(
  { imageUrl, title, content, onClick }: BookListProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} onClick={onClick} className="flex gap-[13px] max-h-[156px] ">
      <Image
        className="rounded-[4px] max-w-[104px] border-[1px] border-white/10"
        objectFit={"contain"}
        src={imageUrl}
        alt={`${title} 표지`}
      />
      <div>
        <Text variant={"body/16_sb"} className="mb-[10px] line-clamp-2">
          {title}
        </Text>
        <div>{content}</div>
      </div>
    </div>
  );
});
