import { bridge } from "@repo/bridge-web";
import { isApp } from "@repo/bridge-web/isApp";

export const openExternalUrl = async (url: string, options?: { target?: "_blank" | "_self" }) => {
  if (isApp()) {
    bridge?.openExternalUrl?.(url);
  } else {
    window.open(url, options?.target);
  }
};
