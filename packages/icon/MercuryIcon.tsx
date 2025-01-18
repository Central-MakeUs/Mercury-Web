import { Image } from "@repo/design-system/Image";
const TOAST_MERCURY_ICON = "/images/toast/toast_mercury_icon.webp";

export const MercuryIcon = () => {
  return (
    <Image
      src={TOAST_MERCURY_ICON}
      alt="mercury icon"
      className="w-[17px] h-[18px] rotate-[2.87]"
    />
  );
};
