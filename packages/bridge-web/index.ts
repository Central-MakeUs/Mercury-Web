import type { BridgeStore } from "@webview-bridge/types";
import { linkBridge } from "@webview-bridge/web";

type AbstractBridgeFunctions = {
  openInAppUrl: (url: string) => Promise<void>;
  openExternalUrl: (url: string) => Promise<void>;
  openSetting: () => Promise<void>;
  copyClipboard: (text: string) => Promise<void>;
  requestReview: () => Promise<boolean>;
  getUserAppVersion: () => Promise<string | null>;
};

export type AppBridge = BridgeStore<AbstractBridgeFunctions>;

export const bridge = linkBridge();
