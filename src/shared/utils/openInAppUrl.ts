import { bridge } from "@repo/bridge-web";
import { isApp } from "@repo/bridge-web/isApp";

export const openInAppUrl = (url: string, options?: { target?: "_blank" | "_self" }) => {
  if (isApp()) {
    bridge?.openInAppUrl?.(url);
  }
  return window.open(url, options?.target);
};
