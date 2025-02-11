import { bridge } from "@repo/bridge-web";
import { isApp } from "@repo/bridge-web/isApp";

export const copyClipBoard = (text: string) => {
  if (isApp()) {
    return bridge?.copyClipboard(text);
  }
  return navigator.clipboard.writeText(text);
};
