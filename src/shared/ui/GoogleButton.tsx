import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";

export const GoogleButton = forwardRef(function GoogleButton(
  props: ComponentPropsWithoutRef<"button">,
  ref: Ref<HTMLButtonElement>,
) {
  const { className, children, ...rest } = props;
  return (
    <button
      ref={ref}
      className={cn(
        " duration-300 transition-all active:scale-[0.98] active:opacity-80  flex justify-center items-center size-[56px]",
        className,
      )}
      {...rest}
    >
      <AspectRatio ratio={1}>
        <Image src={"/images/common/google_button.webp"} alt="google logo" objectfit={"fill"} />
      </AspectRatio>
    </button>
  );
});
