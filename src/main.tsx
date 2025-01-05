import "./index.css";
import { Analytics } from "@repo/analytics";
import { MswDevTools } from "@repo/mocks/DevTools.tsx";
import { worker } from "@repo/mocks/browser";
import { Providers } from "@repo/providers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
      <Analytics />
      <MswDevTools enabled={true} />
    </Providers>
  </StrictMode>,
);

if (process.env.NODE_ENV === "development") {
  worker.start();
}
