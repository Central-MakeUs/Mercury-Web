import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    VITE_API_URL: z.string().min(1),
    VITE_PUBLIC_DEEP_LINK_SCHEME: z.string().min(1),
    VITE_PUBLIC_POSTHOG_KEY: z.string().min(1),
    VITE_PUBLIC_POSTHOG_HOST: z.string().min(1),
  },
  shared: {
    DEV: z.boolean(),
    PROD: z.boolean(),
  },
  clientPrefix: "VITE",
  emptyStringAsUndefined: true,
  runtimeEnv: {
    VITE_API_URL: `${import.meta.env.VITE_API_URL}/api`,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
    VITE_PUBLIC_DEEP_LINK_SCHEME: import.meta.env.VITE_PUBLIC_DEEP_LINK_SCHEME,
    VITE_PUBLIC_POSTHOG_KEY: import.meta.env.VITE_PUBLIC_POSTHOG_KEY,
    VITE_PUBLIC_POSTHOG_HOST: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  },
});
