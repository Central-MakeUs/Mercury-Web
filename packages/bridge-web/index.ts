import type { BridgeStore } from "@webview-bridge/types";
import { linkBridge } from "@webview-bridge/web";

interface ScheduleTimerNotificationProps {
  seconds: number;
  title: string;
  body: string;
  data?: Record<string, unknown>;
}

type ScheduleTimerNotificationSuccessResult = {
  success: true;
  id: string;
};

type ScheduleTimerNotificationErrorResult = {
  success: false;
  id: null;
};

export type StatusBarStyle = "auto" | "inverted" | "light" | "dark";

export type HapticType =
  | "selection"
  | "notification-error"
  | "notification-warning"
  | "notification-success"
  | "impact-light"
  | "impact-medium"
  | "impact-heavy"
  | "impact-soft"
  | "impact-rigid";

type AbstractBridgeFunctions = {
  getUserAppVersion: () => Promise<string | null>;
  copyClipboard: (text: string) => Promise<void>;
  openExternalUrl: (url: string) => Promise<void>;
  openInAppUrl: (url: string) => Promise<void>;
  openSetting: () => Promise<void>;
  requestReview: () => Promise<boolean>;
  getInsets: () => Promise<{ top: number; bottom: number; left: number; right: number }>;
  notifyStatusBar: (style: StatusBarStyle) => Promise<void>;
  triggerHapticFeedback: (hapticType: HapticType) => Promise<void>;
  scheduleTimerNotification: (
    props: ScheduleTimerNotificationProps,
  ) => Promise<ScheduleTimerNotificationSuccessResult | ScheduleTimerNotificationErrorResult>;
  cancelTimerNotification: (id: string) => Promise<{ success: boolean }>;
  getPushToken: () => Promise<string | null>;
  requestPushNotificationPermission: () => Promise<void>;
  hasPushNotificationPermission: () => Promise<boolean>;
};

export type AppBridge = BridgeStore<AbstractBridgeFunctions>;

export const bridge = linkBridge<AppBridge>();
