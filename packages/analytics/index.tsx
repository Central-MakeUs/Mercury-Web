import Clarity from "@microsoft/clarity";
import { env } from "@repo/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { type PropsWithChildren, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router";

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

export const PostHogPageView = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pathname = location.pathname;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url += `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);
  return null;
};

export const MercuryPostHogProvider = (props: PropsWithChildren) => {
  const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? null;
  const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? null;

  useEffect(() => {
    if (apiKey && apiHost) {
      posthog.init(apiKey, { api_host: apiHost });
    }
  }, []);

  if (!(apiKey && apiHost)) {
    return <>{props.children}</>;
  }

  return <PostHogProvider client={posthog}>{props.children}</PostHogProvider>;
};
