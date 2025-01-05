import { config } from "dotenv";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react() as any, tsConfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      include: ["**/*.test.+(ts|tsx|js)"],
      exclude: ["**/*.js", "**/*.mjs", "**/*.cjs"],
      reporter: ["text", "json-summary"],
    },
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.tsx"],
    include: ["**/*.test.+(ts|tsx|js)"],
    reporters: ["default", "json", "github-actions"],
    outputFile: "test-results.json",
    poolOptions: {
      threads: {
        singleThread: true,
      },
      forks: {
        singleFork: true,
      },
    },
    maxConcurrency: 1,
    env: {
      ...config({ path: process.env.CI ? "./.env" : "./.env.local" }).parsed,
    },
  },
  resolve: {
    alias: {
      "@repo/*": "./packages/*",
      "~/*": "./src/*",
    },
  },
});
