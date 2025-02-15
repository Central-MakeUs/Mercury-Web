import { env } from "@repo/env";
import * as Sentry from "@sentry/react";

export const sentryInitialize = () =>
  Sentry.init({
    enabled: env.PROD,
    dsn: "https://ee46830d110f34edf29e4f424f998d6e@o4508824133238784.ingest.us.sentry.io/4508824134352896",
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/api\.mercuryplanet\.co\.kr\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
