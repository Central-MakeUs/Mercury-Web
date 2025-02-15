import { bridge } from "@repo/bridge-web";
import { isApp } from "@repo/bridge-web/isApp";

export const openExternalUrl = async (url: string) => {
  if (isApp()) {
    bridge?.openExternalUrl(url);
  } else {
    window.open(url, "_blank");
  }
};
