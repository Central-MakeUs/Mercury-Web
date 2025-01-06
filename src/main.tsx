import "./index.css";
import { Analytics } from "@repo/analytics";
import { worker } from "@repo/mocks/browser";
import { Providers } from "@repo/providers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </Providers>
  </StrictMode>,
);

if (process.env.NODE_ENV === "development") {
  worker.start();
}
