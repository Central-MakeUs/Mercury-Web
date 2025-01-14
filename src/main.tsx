import "./index.css";
import "../packages/design-system/iosTimePicker.css";

import { Analytics } from "@repo/analytics";
import { MobileLayout } from "@repo/design-system/MobileLayout.tsx";
import { worker } from "@repo/mocks/browser";
import { Providers } from "@repo/providers";
import { MAX_WIDTH } from "@repo/token/index.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import BottomNavigationLayout from "./app/BottomNavigationLayout.tsx";
import BookRecordPage from "./pages/BookRecordPage.tsx";
import BookRecordWritePage from "./pages/BookRecordWritePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import OnBoardingPage from "./pages/OnBoardingPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import TimerPage from "./pages/TimerPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileLayout maxWidth={MAX_WIDTH}>
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route element={<BottomNavigationLayout />}>
              <Route path="home" element={<HomePage />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="book-record" element={<BookRecordPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="book-record/write" element={<BookRecordWritePage />} />
            <Route path="" element={<OnBoardingPage />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </Providers>
    </MobileLayout>
  </StrictMode>,
);

if (process.env.NODE_ENV === "development") {
  worker.start();
}
