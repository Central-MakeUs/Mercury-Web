import Clarity from "@microsoft/clarity";
import { env } from "@repo/env";
import { PostHogProvider } from "posthog-js/react";
import { type PropsWithChildren, useEffect } from "react";

export const Analytics = () => {
  return (
    <>
      <ClarityEffector />
    </>
  );
};

const CLARITY_PROJECT_ID = "pwcbiarjxq";

const ClarityEffector = () => {
  useEffect(() => {
    if (env.PROD) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);
  return null;
};

export const MercuryPostHogProvider = (props: PropsWithChildren) => {
  const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? null;
  const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? null;

  if (!(apiKey && apiHost)) {
    return <>{props.children}</>;
  }

  return (
    <PostHogProvider apiKey={apiKey} options={{ api_host: apiHost }}>
      {props.children}
    </PostHogProvider>
  );
};
